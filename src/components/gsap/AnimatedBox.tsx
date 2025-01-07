import React, { useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    gsap.to(boxRef.current, {
      duration: 1,
      x: 200,
      opacity: 1,
      ease: 'power2.out',
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Animate</button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          opacity: 0, // Start hidden
        }}
      ></div>
    </div>
  );
};

export default AnimatedBox;
