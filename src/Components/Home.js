import React, {Component} from 'react';
import logo from '../download.jpeg';
import '../App.css';

class Home extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <div className="App-title-bar">
            <h1>Resistor Color Challenge</h1>
          </div>  
        </div>
        <div className="App-title-bar">
          <img src={logo} className="Logo-image" alt="resistor logo"/>
        </div>
      </div>
    )
  }
}

export default Home