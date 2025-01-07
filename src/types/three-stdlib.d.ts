declare module 'three-orbit-controls' {
  import { Camera, EventDispatcher, MOUSE, Vector3 } from 'three';

  class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement | HTMLDocument;

    // API
    enabled: boolean;
    target: Vector3;

    // deprecated
    center: Vector3;

    enableZoom: boolean;
    zoomSpeed: number;
    minDistance: number;
    maxDistance: number;

    enableRotate: boolean;
    rotateSpeed: number;

    enablePan: boolean;
    keyPanSpeed: number;
    autoRotate: boolean;
    autoRotateSpeed: number;

    enableDamping: boolean;
    dampingFactor: number;

    screenSpacePanning: boolean;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;

    enableKeys: boolean;
    keys: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number };
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };

    update(): void;
    saveState(): void;
    reset(): void;
    dispose(): void;
    getPolarAngle(): number;
    getAzimuthalAngle(): number;
    getDistance(): number;
  }

  export default function (three: typeof THREE): typeof OrbitControls;
}
