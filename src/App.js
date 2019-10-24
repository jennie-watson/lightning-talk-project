import React from 'react';
import logo2 from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="stuff-logo" alt="logo" />
        <h1>Lightning Talks</h1>
          <p>
            Lightning Talks are brief, 5-10 minute presentations that focus on a
            single topic, example, idea, project, or technique. Lightning Talks
            do not attempt to cover all aspects of their subject matter, but
            present one facet of the idea clearly and succinctly.
          </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
         <button type="submit">Share your idea here</button>
      </header>
    </div>
  );
}

export default App;
