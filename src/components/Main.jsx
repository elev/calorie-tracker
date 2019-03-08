import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Header from "./Header";
import Food from "./Food";
import Exercise from "./Exercise";
import Goals from "./Goals";
import ViewMacros from "./ViewMacros";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

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
      dailyGoal: 2000,
      foods: [],
      exercises: [],
      macros: {
        protein: 0,
        fat: 0,
        carbs: 0,
        proteinGoal: 0,
        fatGoal: 0,
        carbGoal: 0
      },
      addedFoodOpen: false
    };
    this.updateCalorieCount = this.updateCalorieCount.bind(this);
    this.saveFood = this.saveFood.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    this.addedFoodClose = this.addedFoodClose.bind(this);
  }

  updateCalorieCount(amount, newMacros = {}) {
    const addMacro = (key, oldMacros, newMacros) => {
      return parseInt(oldMacros[key]) + (parseInt(newMacros[key]) || 0);
    };

    const buildUpdateMacros = (oldMacros, newMacros) => {
      return (accumulator, key) => {
        accumulator[key] = addMacro(key, oldMacros, newMacros);
        return accumulator;
      };
    };

    const updateMacros = buildUpdateMacros(this.state.macros, newMacros);

    let macros = Object.keys(this.state.macros).reduce(updateMacros, {});

    this.setState({
      calorieCount: this.state.calorieCount + amount,
      macros,
      addedFoodOpen: true
    });
  }

  addedFoodClose() {
    this.setState({ addedFoodOpen: false });
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

  updateGoals(macros, dailyGoal) {
    let newMacros = Object.assign({}, this.state.macros, macros);

    this.setState({
      macros: newMacros,
      dailyGoal: dailyGoal
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.props.classes.main}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={this.state.addedFoodOpen}
            onClose={this.addedFoodClose}
            ContentProps={{
              "aria-describedby": "added-food-message-id"
            }}
            message={
              <span id="added-food-message-id">Daily Calories Updated</span>
            }
          />
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
            <Route
              path="/goals"
              render={routeProps => (
                <Goals
                  {...routeProps}
                  defaultMacros={this.state.macros}
                  updateGoals={this.updateGoals}
                  defaultDailyGoal={this.state.dailyGoal}
                />
              )}
            />
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
