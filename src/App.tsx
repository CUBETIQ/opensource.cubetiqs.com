import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/assets/logo-white-text.png" className="App-logo" alt="logo" width="50%" />
        <p>
          Welcome to CUBETIQ Open Source.
        </p>
        <a
          className="App-link"
          href="https://opensource.cubetiqs.com/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Projects
        </a>
      </header>
    </div>
  );
}

export default App;
