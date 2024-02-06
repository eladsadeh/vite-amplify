import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { About } from './About';
import './App.css';
// console.log('APP_VERSION', APP_VERSION);
console.log(import.meta.env);
// console.log('myvars.env', myvars.env);

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + Amplify</h1>
      <h2>Test Amplify CLI</h2>
      <div className="card">
        <button onClick={() => setShowAbout(!showAbout)}>About</button>
        {showAbout && <About />}
      </div>
    </>
  );
}

export default App;
