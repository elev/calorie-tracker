import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  computeCaloriesLeft() {
    return this.props.dailyGoal - this.props.calorieCount;
  }

  render() {
    let caloriesLeft = this.computeCaloriesLeft();

    return (
      <div className="header">
        <Link to="/">
          <h2 className="title">Calorie Tracker</h2>
        </Link>
        {/* these counts will be dynamic perhaps their own component */}
        <div className="count">Consumed: {this.props.calorieCount}</div>
        <div className="count">Left: {caloriesLeft}</div>
      </div>
    );
  }
}

export default Header;
