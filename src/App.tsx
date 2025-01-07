// import React from 'react';
// import AnimatedBox from './components/AnimatedBox';
import PopOutBox from './components/gsap/PopOutBox';
import ThreeScene from './components/three/ThreeScene';

function App() {
  return (
    <div className="App">
      <h1>歡迎來到我的網站</h1>
      <h2>網站目前測試中👨‍🔧</h2>
      <ThreeScene />
      {/* <P5Canvas /> */}
      {/* <P5SketchWithState /> */}
      <PopOutBox />
    </div>
  );
}

export default App;
