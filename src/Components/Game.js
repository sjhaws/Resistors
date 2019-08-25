import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import quest from '../Images/0205.png'
import Countdown from 'react-countdown-now';

class Game extends Component{
  
  
render(){
    
  
  return(
    <div className="App">
      <div className="App-header">
        <div className="Question-zone">

          <div className="Question">
            <img src={quest} alt="resistor"/>
          </div>
          <div>
            <TextField
            id="value"
            label="Value"
            // value={values.name}
            // onChange={handleChange('name')}
            margin="none"
            />
            <TextField
            id="percent"
            label="Percent"
            // value={values.name}
            // onChange={handleChange('name')}
            margin="none"
            />
          </div>
            <Button>Next</Button>
        </div>
      </div>
        <div>
          <h1>
            <Countdown date={Date.now() + 60000} />
          </h1>
        </div>
        <div className="Score">
          <h2>Score</h2>
          <h1>0</h1>
        </div>
    </div>
  )
}
}
export default Game