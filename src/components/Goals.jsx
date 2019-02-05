import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Goals extends Component {
    render() {
        return (
            <div className="Goals">
                <Header />
                <form>
                    <h2>Daily Food Goals</h2>
                    <label htmlFor="DailyCalorieGoals">Daily Calorie Goals</label>
                    <input  id="DailyCalorieGoals" type="text" placeholder="Daily Calorie Goals" />

                    <div className="optionalGoals">
                        <h2>Optional Macro Goals</h2>

                        <label htmlFor="Protein"></label>
                        <input  id="Protein" type="text" placeholder="Protein" />

                        <label htmlFor="Carbs"></label>
                        <input  id="Carbs" type="text" placeholder="Carbs" />

                        <label htmlFor="Fat"></label>
                        <input  id="Fat" type="text" placeholder="Fat" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Goals;