import React, { Component } from "react";
import Header from "./Header";

class Goals extends Component {
  render() {
    return (
      <div className="goals">
        <Header />
        <form>
          <h2>Daily Food Goals</h2>
          <div>
            <label htmlFor="calories">Daily Calorie Goals</label>
            <input id="calories" type="text" placeholder="Calories" />
          </div>
          <div className="optional-goals">
            <h2>Optional Macro Goals</h2>

            <label htmlFor="protein">Protein</label>
            <input id="protein" type="text" placeholder="Protein" />

            <label htmlFor="carbs">Carbs</label>
            <input id="carbs" type="text" placeholder="Carbs" />

            <label htmlFor="fat">Fat</label>
            <input id="fat" type="text" placeholder="Fat" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Goals;
