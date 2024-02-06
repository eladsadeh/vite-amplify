import { useState } from 'react';
import { About } from './About';
import './App.css';
console.log('import.meta.env:', import.meta.env);
// @ts-ignore
console.log('process.env:', process.env);

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
