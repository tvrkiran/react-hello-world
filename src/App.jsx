import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const thisProject = {
    hasUnitTests: true,
    hasE2ETests: true,
    hasIssues: false
  };
  var a = 'fasdf';
  console.log("The result is", a)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
      </header>
    </div>
  );
}

export default App;
