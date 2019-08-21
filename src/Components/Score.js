import React, { Component } from 'react'
import '../App.css';

class Score extends Component{
render(){
  return(
    <div className="App">
      <div className="App-header">
          <div className="App-title-bar">
            <h1>Your Top Scores</h1>
          </div>  
        <div className="Scoreboard">
        <ol className="Scores">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
        </div>
        </div>
    </div>
  )
}
}
export default Score