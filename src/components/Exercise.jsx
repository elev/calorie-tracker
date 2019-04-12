import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  section: {
    margin: theme.spacing.unit * 2
  }
});

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

  render() {
    return (
      <div className="exercise">
        <section className={this.props.classes.section}>
          <form id="addExercise" onSubmit={this.submitQuickAmountExercise}>
            <div>
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
                fullWidth
              />
            </div>
            <div>
              <Button
                size="large"
                value="Submit Quick Amount"
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </section>
        <section>
          <div className="saved-items">List saved items here</div>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Exercise);
