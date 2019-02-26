import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Header from "./Header";
import Food from "./Food";
import Exercise from "./Exercise";
import Goals from "./Goals";
import ViewMacros from "./ViewMacros";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  main: {
    "max-width": "400px",
    margin: "0 auto"
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calorieCount: 0,
      dailyGoal: 1800, // change this to not be magic later.
      foods: [],
      exercises: [],
      macros: {
        protein: 0,
        fat: 0,
        carbs: 0,
        proteinGoal: 0,
        fatGoal: 0,
        carbGoal: 0
      }
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
      <BrowserRouter>
        <div className={this.props.classes.main}>
          <Header
            calorieCount={this.state.calorieCount}
            dailyGoal={this.state.dailyGoal}
          />
          <Switch>
            <Route exact path="/" component={Landing} />
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
            <Route
              path="/view-macros"
              render={routeProps => (
                <ViewMacros {...routeProps} macros={this.state.macros} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(Main);
