import React from "react";
import { Route, Switch } from "react-router-dom";
import Food from "./Food";
import Exercise from "./Exercise";
import Goals from "./Goals";
import Landing from "./Landing";
import ViewMacros from "./ViewMacros";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        path="/add-food"
        render={routeProps => (
          <Food {...routeProps} updateCalorieCount={props.updateCalorieCount} />
        )}
      />
      <Route
        path="/add-exercise"
        render={routeProps => (
          <Exercise
            {...routeProps}
            updateCalorieCount={props.updateCalorieCount}
            saveExercise={props.saveExercise}
          />
        )}
      />
      <Route
        path="/goals"
        render={routeProps => (
          <Goals
            {...routeProps}
            defaultMacros={props.macros}
            updateGoals={props.updateGoals}
            defaultDailyGoal={props.dailyGoal}
          />
        )}
      />
      <Route
        path="/view-macros"
        render={routeProps => (
          <ViewMacros {...routeProps} macros={props.macros} />
        )}
      />
    </Switch>
  );
};

export default Routes;
