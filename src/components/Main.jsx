import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="action-button">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="add-food"
            >
              Add Food
            </Button>
          </div>
          <div className="action-button">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="add-exercise"
            >
              Add Exercise
            </Button>
          </div>
          <div className="action-button">
            <Button
              component={Link}
              color="primary"
              variant="contained"
              to="view-macros"
            >
              View Macros
            </Button>
          </div>
          <div className="action-button">
            <Button
              component={Link}
              color="primary"
              variant="contained"
              to="goals"
            >
              Update Goals
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
