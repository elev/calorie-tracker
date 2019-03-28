import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  section: {
    margin: theme.spacing.unit * 2
  }
});

class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calorieAmount: 0,
      macros: {
        protein: 0,
        fat: 0,
        carbs: 0
      }
    };

    this.updateLocalCalories = this.updateLocalCalories.bind(this);
    this.submitFood = this.submitFood.bind(this);
    this.changeMacros = this.changeMacros.bind(this);
  }

  updateLocalCalories(event) {
    this.setState({ calorieAmount: event.target.value });
  }

  submitFood(event) {
    event.preventDefault();
    this.props.updateCalorieCount(
      parseInt(this.state.calorieAmount),
      this.state.macros
    );
    this.setState({
      calorieAmount: 0,
      macros: { protein: 0, fat: 0, carbs: 0 }
    });
  }

  changeMacros(event) {
    let macros = Object.assign({}, this.state.macros);
    macros[event.currentTarget.name] = event.target.value;
    this.setState({ macros });
  }

  render() {
    return (
      <div className="food">
        <form id="addFood" onSubmit={this.submitFood}>
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
                fullWidth
                onChange={this.updateLocalCalories}
                value={this.state.calorieAmount}
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
                  fullWidth
                  onChange={this.changeMacros}
                  value={this.state.macros.protein}
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
                  fullWidth
                  onChange={this.changeMacros}
                  value={this.state.macros.carbs}
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
                  fullWidth
                  onChange={this.changeMacros}
                  value={this.state.macros.fat}
                />
              </div>
            </div>
            <Button
              size="large"
              value="Submit Quick Amount"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
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
