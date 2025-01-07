import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const Torus: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [, setScrollProgress] = useState(0);

    useEffect(() => {
        if (!canvasRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true, // Make background transparent
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background

        // --- Torus Geometry ---
        const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        const material = new THREE.MeshPhongMaterial({
            color: 0x42bff5,
            specular: 0x555555,
            shininess: 30,
        });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // --- Camera Position ---
        camera.position.z = 5;

        // --- Orbit Controls ---
        const controls = new OrbitControls(camera, renderer.domElement);

        // --- Scroll-based Animation ---
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const newScrollProgress = scrollY / maxScroll;

            setScrollProgress(newScrollProgress);

            // Update torus size based on scroll progress
            const scale = 1 + newScrollProgress * 0.65; // Example scaling
            torus.scale.set(scale, scale, scale);
        };

        window.addEventListener('scroll', handleScroll);

        // --- Animation Loop ---
        const animate = () => {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            // Update orbit controls
            controls.update();

            renderer.render(scene, camera);
        };

        animate();

        // --- Resize Handling ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- Cleanup ---
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            renderer.dispose();
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
            <div style={{ height: '300vh', zIndex: 1 }}>
                {/* Example content that is scrollable */}
                <h1>My Scrollable Content</h1>
                <p>Scroll down to see the torus change size and content move.</p>
                {/* Add more content as needed */}
            </div>
        </div>
    );
};

export default Torus;