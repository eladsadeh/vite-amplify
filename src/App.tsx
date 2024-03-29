import { useState } from 'react';
import { About } from './About';
import './App.css';
console.log('import.meta.env:', import.meta.env);
// console.log('APP_VERSION:', APP_VERSION);
// console.log('BUILD_TIME:', BUILD_TIME);

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
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
