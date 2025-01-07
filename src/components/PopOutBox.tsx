import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PopOutBox: React.FC = () => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(boxRef.current, { // Use gsap.to() instead of gsap.from()
            scale: 1, // Animate to full size (scale of 1)
            opacity: 1, // Animate to fully visible (opacity of 1)
            ease: 'power2.out',
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: true,
                // markers: true, // Uncomment for debugging
            },
        });
    }, []);

    return (
        <div
            ref={boxRef}
            style={{
                width: 200,
                height: 200,
                backgroundColor: 'orange',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '150vh',
                marginBottom: '50vh',
                transform: 'scale(0.5)', // Start at a smaller size
                opacity: 0, // Start hidden
            }}
        >
            <h2 style={{ color: 'white' }}>Pop Out!</h2>
        </div>
    );
};

export default PopOutBox;