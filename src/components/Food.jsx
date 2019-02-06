import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Food extends Component {
    render() {
        return (
            <div className="Food">
                <Header />
                { /* this should probably be it's own component
                
                    yeah, def, and the "props" will set the values maybe...
                */
            
                }
                <form>
                    <label htmlFor="caloriesConsumed">Calories Consumed:</label>
                    <input  id="caloriesConsumed" type="text" placeholder="Calories Consumed" />

                    <div className="optionalName">
                        <input id="name" type="text" placeholder="Optional Name"></input>
                    </div>
                    <div className="optionalMacros">
                        <h2>Optional Macros Consumed</h2>
                        <div>
                            <label htmlFor="ProteinConsumed"></label>
                            <input  id="ProteinConsumed" type="text" placeholder="Protein Consumed" />
                        </div>
                        <div>
                            <label htmlFor="CarbsConsumed"></label>
                            <input  id="CarbsConsumed" type="text" placeholder="Carbs Consumed" />
                        </div>
                        <div>
                            <label htmlFor="FatConsumed"></label>
                            <input  id="FatConsumed" type="text" placeholder="Fat Consumed" />
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                    <input type="submit" value="Submit and Save as New" />
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