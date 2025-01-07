import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const Torus: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [, setScrollPercentage] = useState(0);

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
            alpha: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // --- Torus Geometry ---
        const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        const material = new THREE.MeshPhongMaterial({
            color: 0x8034eb,
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

        // --- Scroll Animation ---
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;

            const maxScroll = documentHeight - windowHeight;
            const scrollPercent = scrollY / maxScroll;

            setScrollPercentage(scrollPercent);

            torus.rotation.y = scrollPercent * Math.PI * 2;
        };
        window.addEventListener('scroll', handleScroll);

        // --- Animation Loop ---
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the torus
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01
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
            controls.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Torus;