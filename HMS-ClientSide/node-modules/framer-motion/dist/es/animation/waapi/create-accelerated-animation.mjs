import { sync } from '../../frameloop/index.mjs';
import { animate } from '../legacy-popmotion/index.mjs';
import { animateStyle } from './index.mjs';
import { isWaapiSupportedEasing } from './easing.mjs';
import { supports } from './supports.mjs';
import { getFinalKeyframe } from './utils/get-final-keyframe.mjs';

/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set(["opacity"]);
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
    const canAccelerateAnimation = supports.waapi() &&
        acceleratedValues.has(valueName) &&
        !options.repeatDelay &&
        options.repeatType !== "mirror" &&
        options.damping !== 0;
    if (!canAccelerateAnimation)
        return false;
    let { keyframes, duration = 300, elapsed = 0, ease } = options;
    /**
     * If this animation needs pre-generated keyframes then generate.
     */
    if (options.type === "spring" || !isWaapiSupportedEasing(options.ease)) {
        /**
         * If we need to pre-generate keyframes and repeat is infinite then
         * early return as this will lock the thread.
         */
        if (options.repeat === Infinity)
            return;
        const sampleAnimation = animate({ ...options, elapsed: 0 });
        let state = { done: false, value: keyframes[0] };
        const pregeneratedKeyframes = [];
        /**
         * Bail after 20 seconds of pre-generated keyframes as it's likely
         * we're heading for an infinite loop.
         */
        let t = 0;
        while (!state.done && t < 20000) {
            state = sampleAnimation.sample(t);
            pregeneratedKeyframes.push(state.value);
            t += sampleDelta;
        }
        keyframes = pregeneratedKeyframes;
        duration = t - sampleDelta;
        ease = "linear";
    }
    const animation = animateStyle(value.owner.current, valueName, keyframes, {
        ...options,
        delay: -elapsed,
        duration,
        /**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */
        ease: ease,
    });
    /**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */
    animation.onfinish = () => {
        value.set(getFinalKeyframe(keyframes, options));
        sync.update(() => animation.cancel());
        onComplete && onComplete();
    };
    /**
     * Animation interrupt callback.
     */
    return {
        get currentTime() {
            return animation.currentTime || 0;
        },
        set currentTime(t) {
            animation.currentTime = t;
        },
        stop: () => {
            /**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */
            const { currentTime } = animation;
            if (currentTime) {
                const sampleAnimation = animate({ ...options, autoplay: false });
                value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
            }
            sync.update(() => animation.cancel());
        },
    };
}

export { createAcceleratedAnimation };
