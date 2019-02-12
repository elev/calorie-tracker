import React, { Component } from "react";
import { Link } from "react-router-dom";

class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calorieAmount: 0
    };

    this.updateLocalCalories = this.updateLocalCalories.bind(this);
    this.submitQuickAmount = this.submitQuickAmount.bind(this);
  }

  updateLocalCalories(event) {
    this.setState({ calorieAmount: event.target.value });
  }

  submitQuickAmount(event) {
    event.preventDefault();
    this.props.updateCalorieCount(parseInt(this.state.calorieAmount));
    this.setState({ calorieAmount: 0 });
  }

  render() {
    return (
      <div className="food">
        {/* Todo, break form elements out into individual components? */}
        <form>
          <label htmlFor="calories">
            Calories:
            <input
              id="calories"
              type="number"
              pattern="[0-9]*"
              placeholder="Calories"
              onChange={this.updateCalories}
              value={this.state.calorieAmount}
            />
          </label>
          <input
            type="submit"
            onClick={this.submitQuickAmount}
            value="Submit Quick Amount"
          />

          <div className="optional-name">
            <input id="name" type="text" placeholder="Name" />
          </div>

          <div className="optional-macros">
            <h2>Optional Macros Consumed</h2>
          </div>
          <div>
            <label htmlFor="protein">
              Protein:
              <input id="protein" type="text" placeholder="Protein" />
            </label>
          </div>
          <div>
            <label htmlFor="carbs">
              Carbs:
              <input id="carbs" type="text" placeholder="Carbs" />
            </label>
          </div>
          <div>
            <label htmlFor="fat">
              Fat:
              <input id="fat" type="text" placeholder="Fat" />
            </label>
          </div>
          <input type="submit" value="Submit" />
          <input type="submit" value="Submit and Save as New" />
        </form>

        <div className="action-button">
          <Link to="use-saved-food">
            <button type="button">Use Saved Food</button>
          </Link>
        </div>
        <div className="action-button">
          <Link to="create-new-food">
            <button type="button">Create New Food</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Food;
