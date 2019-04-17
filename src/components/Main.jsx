import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Routes from "./Routes";

// this component is a GOD class. It needs to be refactored down.
// article on decomposing react components
// https://medium.com/dailyjs/techniques-for-decomposing-react-components-e8a1081ef5da
// this should help and should be the next TODO after we can verify this time clearing stuff working.

// Also using redux will clean this up.... we should refactor to use that SOON

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
      flashMessageOpen: false,
      flashMessageText: "",
      dayTimeout: 0,
      dayEnd: 0,
      msUntilEndDay: 0
    };
    this.updateCalorieCount = this.updateCalorieCount.bind(this);
    this.saveFood = this.saveFood.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    this.closeFlashMessage = this.closeFlashMessage.bind(this);
    this.clearDay = this.clearDay.bind(this);
    this.setEndOfDay = this.setEndOfDay.bind(this);
    this.setEndOfDayTimeout = this.setEndOfDayTimeout.bind(this);
    this.clearEndOfDayTimeout = this.clearEndOfDayTimeout.bind(this);

    this.routeProps = {};
  }

  // this method is big. refactor/recompose
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
      flashMessageOpen: true,
      flashMessageText: "Daily Calories Updated"
    });
  }

  closeFlashMessage() {
    this.setState({ flashMessageOpen: false });
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
      dailyGoal: dailyGoal,
      flashMessageOpen: true,
      flashMessageText: "Daily Goals Updated"
    });
  }

  clearDay() {
    // Todos
    // future todo, track history of days
    ///// we will need a database for this. or use local storage
    this.setState({
      calorieCount: 0,
      macros: {
        protein: 0,
        fat: 0,
        carbs: 0
      }
    });
  }

  setEndOfDay() {
    this.setState({
      dayEnd: moment().endOf("day")
    });
  }

  setEndOfDayTimeout() {
    if (!this.state.dayEnd) {
      this.setEndOfDay();
    }

    this.setState({
      dayTimeout: setTimeout(
        () => this.clearDay(),
        this.state.dayEnd.diff(moment())
      )
    });
  }

  clearEndOfDayTimeout() {
    if (this.state.dayTimeout) {
      clearTimeout(this.state.dayTimeout);
    }

    this.setState({
      dayTimeout: 0
    });
  }

  componentWillMount() {
    this.setEndOfDay();
  }

  componentWillUnmount() {
    this.clearEndOfDayTimeout();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.props.classes.main}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={this.state.flashMessageOpen}
            onClose={this.closeFlashMessage}
            autoHideDuration={1800}
            ContentProps={{
              "aria-describedby": "flash-message-text"
            }}
            message={
              <span id="flash-message-text">{this.state.flashMessageText}</span>
            }
          />
          <Header
            calorieCount={this.state.calorieCount}
            dailyGoal={this.state.dailyGoal}
          />
          <Routes
            dailyGoal={this.state.dailyGoal}
            macros={this.state.macros}
            saveExercise={this.saveExercise}
            updateCalorieCount={this.updateCalorieCount}
            updateGoals={this.updateGoals}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(Main);
