import { assignRef } from './assignRef';
import { createCallbackRef } from './createRef';
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link useMergeRefs} to be used in ReactComponents
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
export function mergeRefs(refs) {
    return createCallbackRef(function (newValue) { return refs.forEach(function (ref) { return assignRef(ref, newValue); }); });
}
