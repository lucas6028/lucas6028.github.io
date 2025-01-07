// import React from 'react';
import AnimatedBox from './components/AnimatedBox';
import PopOutBox from './components/PopOutBox';
// import StaggeredPopOut from './components/StaggeredPopOut';

function App() {
  return (
    <div className="App">
      <h1>GSAP with Vite, React, and TypeScript</h1>
      <AnimatedBox />
      <PopOutBox />
      {/* <StaggeredPopOut /> */}
    </div>
  );
}

export default App;