// Torus.ts
import * as THREE from 'three';

export class Torus {
  mesh: THREE.Mesh;

  constructor(
    geometry: THREE.TorusGeometry,
    material: THREE.MeshStandardMaterial
  ) {
    this.mesh = new THREE.Mesh(geometry, material);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}
