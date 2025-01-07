import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StaggeredPopOut: React.FC = () => {
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(boxRefs.current, {
      scale: 0.5,
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.2, // Stagger each animation by 0.2 seconds
      scrollTrigger: {
        trigger: '.container', // Trigger when the container is in view
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  const boxes = [1, 2, 3];

  return (
    <div
      className="container"
      style={{ marginTop: '150vh', marginBottom: '50vh' }}
    >
      {boxes.map((index) => (
        <div
          key={index}
          ref={(el) => (boxRefs.current[index] = el!)} // Add element to the ref array
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            margin: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2 style={{ color: 'white' }}>Box {index}</h2>
        </div>
      ))}
    </div>
  );
};

export default StaggeredPopOut;
