import React from 'react';
import Button from '@material-ui/core/Button';
import logo from '../download.jpeg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <img src={logo} className="Logo-image" alt="resistor logo"/>
        </div>
        <div className="App-title-bar">
          <h1>Resistor Color Challenge</h1>
        </div>  
      </div>
      <div className="Menu">
        <Button className="Menu-button">Play</Button>
      </div>
      <div className="Menu">
        <Button className="Menu-button">Score Board</Button>
      </div>
      <div className="Menu">
        <Button className="Menu-button">How to play</Button>
      </div>
      <div className="Footer">
        <h3>Copyright HAWSCO 2019</h3>
      </div>
    </div>
  );
}

export default App;
