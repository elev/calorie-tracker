import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Food from "./components/Food";
import Exercise from "./components/Exercise";
import NewExercise from "./components/NewExercise";
import Goals from "./components/Goals";
import NewFood from "./components/NewFood";
import ViewMacros from "./components/ViewMacros";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/add-food" component={Food} />
            <Route path="/create-new-food" component={NewFood} />
            <Route path="/add-exercise" component={Exercise} />
            <Route path="/create-new-exercise" component={NewExercise} />
            <Route path="/goals" component={Goals} />
            <Route path="/view-macros" component={ViewMacros} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
