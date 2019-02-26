import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Goals extends Component {
  render() {
    return (
      <div className="goals">
        <form>
          <h2>Daily Food Goals</h2>
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
                fullWidth="true"
              />
            </div>
          </div>
          <div className="optional-goals">
            <h2>Macros</h2>
            <div>
              <TextField
                id="protein"
                label="protein"
                type="number"
                pattern="[0-9]*"
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
                type="number"
                pattern="[0-9]*"
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
                type="number"
                pattern="[0-9]*"
                name="fat"
                margin="normal"
                variant="outlined"
                fullWidth="true"
              />
            </div>
          </div>
          <Button
            size="large"
            value="Submit Quick Amount"
            variant="contained"
            color="primary"
            fullWidth="true"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Goals;
