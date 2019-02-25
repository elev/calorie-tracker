import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const styles = theme => ({
  section: {
    margin: theme.spacing.unit * 2
  }
});

class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calorieAmount: 0
    };

    this.updateLocalCalories = this.updateLocalCalories.bind(this);
    this.submitFood = this.submitFood.bind(this);
  }

  updateLocalCalories(event) {
    this.setState({ calorieAmount: event.target.value });
  }

  submitFood(event) {
    event.preventDefault();
    this.props.updateCalorieCount(parseInt(this.state.calorieAmount));
    this.setState({ calorieAmount: 0 });
  }

  render() {
    return (
      <div className="food">
        <form>
          <section className={this.props.classes.section}>
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
                fullWidth="true"
              />
            </div>
          </section>
          <section className={this.props.classes.section}>
            <div className="save-for-later-options">
              <Typography variant="h6">Optional Macros</Typography>
              <div>
                <TextField
                  id="protein"
                  label="protein"
                  type="number"
                  name="protein"
                  margin="normal"
                  variant="outlined"
                  fullWidth="true"
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
                  fullWidth="true"
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
                  fullWidth="true"
                />
              </div>
            </div>
            <Button
              size="large"
              onClick={this.submitFood}
              value="Submit Quick Amount"
              variant="contained"
              color="primary"
              fullWidth="true"
            >
              Submit
            </Button>
          </section>
        </form>

        <section className={this.props.classes.section}>
          <div className="saved-items">List saved items here</div>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Food);
