import React, { Component } from "react";

class NewExercise extends Component {
  render() {
    return (
      <div className="new-exercise">
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="calories">Calories Burned: </label>
            <input id="calories" type="text" placeholder="Calories Burned" />
          </div>
          <div>
            <input type="submit" value="Save as New" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewExercise;
