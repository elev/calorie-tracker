import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class NewExercise extends Component {
    render() {
        return (
            <div className="NewExercise">
                <Header />
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Name" />
                    </div>
                    <div>
                        <label htmlFor="caloriesBurned">QuickAdd Excercise:</label>
                        <input id="caloriesBurned" type="text" placeholder="Calories Burned" />
                    </div>
                    <div>
                        <input type="submit" value="Save as New" />
                    </div>
                </form>
            </div>
        )
    }
}
    
export default NewExercise;