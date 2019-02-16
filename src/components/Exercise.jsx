import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

/**
 * This repeates a lot of the code from foot
 * Currently erring on repetition over the wrong abstraction
 */
class Exercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calorieAmount: 0,
      name: ""
    };

    this.updateLocalCalories = this.updateLocalCalories.bind(this);
    this.submitQuickAmountExercise = this.submitQuickAmountExercise.bind(this);
    this.saveExerciseLocally = this.saveExerciseLocally.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  updateLocalCalories(event) {
    this.setState({ calorieAmount: event.target.value });
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  submitQuickAmountExercise(event) {
    event.preventDefault();
    this.props.updateCalorieCount(parseInt(this.state.calorieAmount) * -1);
    this.setState({ calorieAmount: 0 });
  }

  saveExerciseLocally(event) {
    event.preventDefault();
    this.props.saveExercise({
      calorieAmount: this.state.calorieAmount,
      name: this.state.name
    });
  }

  submitAndSaveExercise(event) {
    this.saveExerciseLocally(event);
    this.submitAndSaveExercise(event);
  }

  /** We can probably abstract the quickadd forms */
  render() {
    return (
      <div className="exercise">
        <form>
          <Grid container spacing={16}>
            <Grid item xs={4}>
              <TextField
                required
                id="calories"
                label="calories"
                type="number"
                pattern="[0-9]*"
                name="calories"
                margin="normal"
                variant="outlined"
                onChange={this.updateLocalCalories}
                value={this.state.calorieAmount}
              />
            </Grid>
            <Grid item>
              <Button
                size="large"
                onClick={this.submitQuickAmountExercise}
                value="Submit Quick Amount"
                variant="contained"
                color="primary"
              >
                Quick Add
              </Button>
            </Grid>
          </Grid>

          <div>
            <label htmlFor="name">Optional Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.updateName}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit and Save as New Exercise"
              onClick={this.submitAndSaveExercise}
            />
            <input
              type="submit"
              value="Save as New Exercise Only"
              onClick={this.saveExerciseLocally}
            />
          </div>
        </form>
        <div className="action-button">
          <Link to="use-saved-execise">
            <button>Use Saved Exercise</button>
          </Link>
        </div>
        <div className="saved-items">List saved items here</div>
      </div>
    );
  }
}

export default Exercise;
