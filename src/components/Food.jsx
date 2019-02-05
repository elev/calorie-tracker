import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Food extends Component {
    render() {
        return (
            <div className="Food">
                <Header />
                { /* this should probably be it's own component */}
                <form>
                    <label htmlFor="caloriesConsumed">Calories Consumed:</label>
                    <input  id="caloriesConsumed" type="text" placeholder="Calories Consumed" />

                    <div className="optionaMacros">
                        <h2>Optional Macros Consumed</h2>

                        <label htmlFor="ProteinConsumed"></label>
                        <input  id="ProteinConsumed" type="text" placeholder="Protein Consumed" />

                        <label htmlFor="CarbsConsumed"></label>
                        <input  id="CarbsConsumed" type="text" placeholder="Carbs Consumed" />

                        <label htmlFor="FatConsumed"></label>
                        <input  id="FatConsumed" type="text" placeholder="Fat Consumed" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <div className="ActionButton">
                    <Link to="use-saved-food">
                        <button>Use Saved Food</button>
                    </Link>
                </div>
                <div className="ActionButton">
                    <Link to="create-new-food">
                        <button>Create New Food</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Food;