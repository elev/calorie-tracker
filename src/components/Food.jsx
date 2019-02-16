import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
        <form>
          <TextField
            required
            id="calories"
            label="calories"
            type="number"
            name="calories"
            margin="normal"
            variant="outlined"
          />
          <Button
            size="large"
            onClick={this.submitQuickAmount}
            value="Submit Quick Amount"
            variant="contained"
            color="primary"
          >
            Submit Quick Amount
          </Button>

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
          <input type="submit" value="Submit and Save as New Food" />
          <input type="submit" value="Save as New Food Only" />
        </form>

        <div className="action-button">
          <Link to="use-saved-food">
            <button type="button">Use Saved Food</button>
          </Link>
        </div>
        <div className="saved-items">List saved items here</div>
      </div>
    );
  }
}

export default Food;
