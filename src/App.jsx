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
  constructor(props) {
    super(props);
    this.state = {
      calorieCount: 0
    };

    this.updateCalorieCount = this.updateCalorieCount.bind(this);
  }

  updateCalorieCount(event) {
    // add validation, debounce, or change this to only work on submit...
    // we may need a validation library
    this.setState({
      calorieCount: this.state.calorieCount + event.target.value
    });

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route
              path="/add-food"
              render={routeProps => (
                <Food
                  {...routeProps}
                  updateCalorieCount={this.updateCalorieCount}
                />
              )}
            />
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
