import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <div className="action-button">
            <Link to="add-food">
              <button>Add Food</button>
            </Link>
          </div>
          <div className="action-button">
            <Link to="add-exercise">
              <button>Add Exercise</button>
            </Link>
          </div>
          <div className="action-button">
            <Link to="view-macros">
              <button>View Macros</button>
            </Link>
          </div>
          <div className="action-button">
            <Link to="goals">
              <button>Update Goals</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
