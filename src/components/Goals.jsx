import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Goals extends Component {
  constructor(props) {
    super(props);
    this.sendUpdatedGoals = this.sendUpdatedGoals.bind(this);
    this.changeMacros = this.changeMacros.bind(this);
    this.changeDailyGoal = this.changeDailyGoal.bind(this);

    this.state = {
      localDailyGoal: this.props.defaultDailyGoal,
      localMacroGoals: {
        proteinGoal: this.props.defaultMacros.proteinGoal,
        fatGoal: this.props.defaultMacros.fatGoal,
        carbGoal: this.props.defaultMacros.carbGoal
      }
    };
  }

  sendUpdatedGoals(event) {
    event.preventDefault();
    this.props.updateGoals(
      this.state.localMacroGoals,
      this.state.localDailyGoal
    );
  }

  changeMacros(event) {
    let macros = Object.assign({}, this.state.localMacroGoals);
    macros[event.target.name] = event.target.value;
    this.setState({ localMacroGoals: macros });
  }

  changeDailyGoal(event) {
    this.setState({ localDailyGoal: event.target.value });
  }

  render() {
    return (
      <div className="goals">
        <form onSubmit={this.sendUpdatedGoals}>
          <h2>Daily Goals</h2>
          <div>
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
                fullWidth
                onChange={this.changeDailyGoal}
                value={this.state.localDailyGoal}
              />
            </div>
          </div>
          <div className="optional-goals">
            <div>
              <TextField
                id="protein"
                label="protein"
                type="number"
                pattern="[0-9]*"
                name="proteinGoal"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={this.changeMacros}
                value={this.state.localMacroGoals.proteinGoal}
              />
            </div>
            <div>
              <TextField
                id="carbs"
                label="carbs"
                type="number"
                pattern="[0-9]*"
                name="carbGoal"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={this.changeMacros}
                value={this.state.localMacroGoals.carbGoal}
              />
            </div>

            <div>
              <TextField
                id="fat"
                label="fat"
                type="number"
                pattern="[0-9]*"
                name="fatGoal"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={this.changeMacros}
                value={this.state.localMacroGoals.fatGoal}
              />
            </div>
          </div>
          <Button
            size="large"
            value="Submit Quick Amount"
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            onChange={this.changeMacros}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Goals;
