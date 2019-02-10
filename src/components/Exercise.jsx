import React, { Component } from "react";
import { Link } from "react-router-dom";

class Exercise extends Component {
  render() {
    return (
      <div className="exercise">
        <form>
          <div>
            <label htmlFor="calories">Calories Burned: </label>
            <input id="calories" type="text" placeholder="Calories" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div>
            <label htmlFor="name">Optional Name</label>
            <input id="name" type="text" placeholder="Name" />
          </div>
          <div>
            <input type="submit" value="Submit and Save as New" />
          </div>
        </form>
        <div className="action-button">
          <Link to="use-saved-execise">
            <button>Use Saved Exercise</button>
          </Link>
        </div>
        <div className="action-button">
          <Link to="create-new-exercise">
            <button>Create New Execise</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Exercise;
