import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import quest from '../Images/demo.jpeg'

class Game extends Component{
  
render(props){
  
  return(
    <div className="App">
      <div className="App-header">
        <div className="Question-zone">

          <div className="Question">
            <img src={quest} alt="resistor image"/>
          </div>
          <div className="Answer">
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
    </div>
  )
}
}
export default Game