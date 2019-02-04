import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Food from './components/Food';
import Exercise from './components/Exercise';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/add-food" component={Food} />
            <Route path="/add-exercise" component={Exercise} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
