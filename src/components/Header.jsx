import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ResponsiveDataTable from "./ResponsiveDataTable";

class Header extends Component {
  computeCaloriesLeft() {
    return this.props.dailyGoal - this.props.calorieCount;
  }

  render() {
    let caloriesLeft = this.computeCaloriesLeft();

    return (
      <div className="header">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h4" component={Link} to="/">
              Calorie Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <ResponsiveDataTable
          calorieCount={this.props.calorieCount}
          caloriesLeft={caloriesLeft}
        />
      </div>
    );
  }
}

export default Header;
