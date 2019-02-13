import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <div>
            <label htmlFor="calories">Calories Burned: </label>
            <input
              id="calories"
              type="number"
              pattern="[0-9]*"
              placeholder="Calories"
              onChange={this.updateLocalCalories}
              value={this.state.calorieAmount}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit Quick Amount"
              onClick={this.submitQuickAmountExercise}
            />
          </div>
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
