import React, { useRef, useEffect } from 'react';
import Glide from '@glidejs/glide';

const GlideComponent: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let glide: Glide | null = null;
        if (sliderRef.current) {
            glide = new Glide(sliderRef.current, {
                type: 'carousel',
                perView: 3,
                focusAt: 'center',
                gap: 40,
                autoplay: 2000,
                breakpoints: {
                    1200: {
                        perView: 3
                    },
                    800: {
                        perView: 2
                    }
                }
            });
            glide.mount();
        }
        return () => {
            if (glide) {
                glide.destroy();
            }
        };
    }, []);

    return (
        <div ref={sliderRef} className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        <img src="https://picsum.photos/200/300" alt="Slide 1" />
                    </li>
                    <li className="glide__slide">
                        <img src="https://picsum.photos/200/300" alt="Slide 2" />
                    </li>
                    <li className="glide__slide">
                        <img src="https://picsum.photos/200/300" alt="Slide 3" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default GlideComponent;
