import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class Food extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="food">
        <Header />
        {/* this should probably be it's own component */}
        <form>
          <label htmlFor="calories">
            Calories:
            <input
              id="calories"
              type="text"
              onChange={this.props.updateCalorieCount}
              placeholder="Calories"
            />
          </label>

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
