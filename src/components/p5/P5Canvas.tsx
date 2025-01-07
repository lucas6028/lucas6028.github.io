import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Canvas: React.FC = React.memo(() => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sketch = (p: p5) => {
            const shapes: { r: number; g: number; b: number; rad: number }[] = [];

            p.setup = () => {
                p.createCanvas(400, 400, p.WEBGL);
                p.angleMode(p.DEGREES);
                p.frameRate(30); // Limit frame rate
                // Precompute some values
                for (let i = 0; i < 50; i++) {
                    shapes.push({
                        r: p.map(i, 0, 50, 100, 200),
                        g: p.map(i, 0, 50, 100, 200),
                        b: p.map(p.cos(0), -1, 1, 200, 100), // Initial value
                        rad: i * 3
                    });
                }
            };

            p.draw = () => {
                p.background(30);
                p.rotateX(60);
                p.noFill();

                for (let i = 0; i < 50; i++) {
                    // Use precompute values when possible
                    shapes[i].b = p.map(p.cos(p.frameCount / 2), -1, 1, 200, 100);
                    p.stroke(shapes[i].r, shapes[i].g, shapes[i].b);
                    p.rotate(p.frameCount / 20);


                    p.beginShape();
                    for (let j = 0; j < 360; j += 90) {
                        const x = shapes[i].rad * p.cos(j);
                        const y = shapes[i].rad * p.sin(j);
                        const z = p.sin(p.frameCount * 2 + i * 5) * 50;
                        p.vertex(x, y, z);
                    }
                    p.endShape(p.CLOSE);
                }
            };
        };

        let myP5: p5;
        if (canvasRef.current) {
            myP5 = new p5(sketch, canvasRef.current);
        }

        return () => {
            myP5.remove();
        };
    }, []);

    return <div ref={canvasRef} />;
});

export default P5Canvas;