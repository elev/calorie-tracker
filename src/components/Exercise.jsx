import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Exercise extends Component {
    render() {
        return (
            <div className="Exercise">
                <Header />
                <form>
                    <label htmlFor="caloriesBurned">QuickAdd Excercise:</label>
                    <input id="caloriesBurned" type="text" placeholder="Calories Burned" />
                    <input type="submit" value="Submit" />
                </form>
                <div className="ActionButton">
                    <Link to="use-saved-execise">
                        <button>Use Saved Exercise</button>
                    </Link>
                </div>
                <div className="ActionButton">
                    <Link to="create-new-exercise">
                        <button>Create New Execise</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Exercise;