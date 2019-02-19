import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const cssClasses = makeStyles => ({
  section: {
    marginBottom: "16px"
  }
});

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
          <section className={cssClasses.section}>
            <div>
              <TextField
                required
                id="calories"
                label="calories"
                type="number"
                name="calories"
                margin="normal"
                variant="outlined"
                onChange={this.updateLocalCalories}
              />
            </div>
            <div>
              <Button
                size="large"
                onClick={this.submitQuickAmount}
                value="Submit Quick Amount"
                variant="contained"
                color="primary"
              >
                Submit Quick Amount
              </Button>
            </div>
          </section>
          <div className="save-for-later-options">
            <Typography variant="h6">Save for later options</Typography>
            <div className="optional-name">
              <TextField
                id="name"
                label="name"
                type="text"
                name="name"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="protein"
                label="protein"
                type="number"
                name="protein"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="carbs"
                label="carbs"
                type="text"
                name="carbs"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="fat"
                label="fat"
                type="text"
                name="fat"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <Button
                size="large"
                value="Submit and Save as New"
                variant="contained"
                color="primary"
              >
                Submit and Save as New
              </Button>
            </div>
            <div>
              <Button
                size="large"
                value="Save as New Only"
                variant="contained"
                color="primary"
              >
                Save as New Only
              </Button>
            </div>
          </div>
        </form>

        <div className="use-saved">
          <Button
            size="large"
            value="Use Saved Food"
            variant="contained"
            color="primary"
          >
            Use Saved Food
          </Button>
        </div>
        <div className="saved-items">List saved items here</div>
      </div>
    );
  }
}

export default Food;
