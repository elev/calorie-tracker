import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Food from "./components/Food";
import Exercise from "./components/Exercise";
import Goals from "./components/Goals";
import ViewMacros from "./components/ViewMacros";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calorieCount: 0,
      dailyGoal: 1800, // change this to not be magic later.
      foods: [],
      exercises: []
    };

    this.updateCalorieCount = this.updateCalorieCount.bind(this);
    this.saveFood = this.saveFood.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
  }

  updateCalorieCount(amount) {
    this.setState({
      calorieCount: this.state.calorieCount + amount
    });
  }

  saveExercise(exercise) {
    this.setState({
      exercises: [...this.state.exercises, exercise]
    });
  }

  saveFood(food) {
    this.setState({
      food: [...this.state.food, food]
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.exercises.map(v => {
            return (
              <li>
                {v.name}, {v.calories}
              </li>
            );
          })}
        </ul>
        <BrowserRouter>
          <div>
            <Header
              calorieCount={this.state.calorieCount}
              dailyGoal={this.state.dailyGoal}
            />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route
                path="/add-food"
                render={routeProps => (
                  <Food
                    {...routeProps}
                    updateCalorieCount={this.updateCalorieCount}
                    saveFood={this.saveFood}
                  />
                )}
              />
              <Route
                path="/add-exercise"
                render={routeProps => (
                  <Exercise
                    {...routeProps}
                    updateCalorieCount={this.updateCalorieCount}
                    saveExercise={this.saveExercise}
                  />
                )}
              />
              <Route path="/goals" component={Goals} />
              <Route path="/view-macros" component={ViewMacros} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
