import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Game from './Game';
import Score from './Score';
import Home from './Home';
import Rules from './Rules';
import '../App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return(
        <Router className="App">
          <div className="Menu">
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/score" component={Score} />
            <Route path="/rules" component={Rules} />
            <Button className="Menu-button">
              <Link to="/">Home</Link>
            </Button>
            <Button className="Menu-button">
              <Link to="/game">New Game</Link>
            </Button>
            <Button className="Menu-button">
              <Link to="/rules">Rules</Link>
            </Button>
            <Button className="Menu-button">
              <Link to="/score">Score Board</Link>
            </Button>
            <div className="Footer">
              <h3>Copyright HAWSCO 2019</h3>
            </div>
          </div>
        </Router>
    )
  }
}

export default App;
