import * as THREE from 'three';
import { Torus } from './components/torus-geometry';
import './style.css';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true, // Optional: enable antialiasing for smoother edges
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffff00, 0); // Set a transparent background
document.body.appendChild(renderer.domElement);

// Torus Geometry
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

// Material
const material = new THREE.MeshStandardMaterial({
  color: 0x3263a8,
});

// Create Torus instance
const torus = new Torus(geometry, material);
scene.add(torus.mesh);

// --- Lighting ---
// (Keep the same lighting code as before)
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // White, intensity 0.5
directionalLight.position.set(1, 1, 1); // Set position
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xff0000, 1, 100); // Red, intensity 1, distance 100
pointLight.position.set(-1, -1, 1);
scene.add(pointLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1); // Sky color, ground color, intensity
scene.add(hemisphereLight);
// --- Animation Loop ---

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Update the torus
  torus.update();

  renderer.render(scene, camera);
}

animate();

// Handle Window Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add Introduction Text to HTML
const introText = document.createElement('div');
introText.id = 'intro-text';
introText.innerHTML = `
  <h1>歡迎來到我的網站❤️</h1>
  <p>我是陳皓平 (Hao-Ping Chen), 目前就讀於台北市立大學資訊科學系二年級</p>
  <p>contact me: U11216028@go.utaipei.edu.tw</p>
`;
document.body.appendChild(introText);
