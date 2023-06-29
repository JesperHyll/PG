import logo from './logo.svg';
import './App.css';
import hejarray, { jesperFunction } from './jesper';
import { useState } from 'react';

function App() {
  const hookArray = useState(() => {
    return hejarray.join(', ... ');
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {hookArray}
          <br />
          {jesperFunction()}
        </a>
      </header>
    </div>
  );
}

export default App;
