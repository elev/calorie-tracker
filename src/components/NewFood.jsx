import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class NewFood extends Component {
    render() {
        return (
            <div className="NewFood">
                <Header />
                { /* make this form a component? But erroring on duplication instead of wrong abstraction right now.*/ }
                <form>
                    <div>
                        <label htmlFor="newFoodName">New Food Name</label>
                        <input  id="newFoodName" type="text" placeholder="newFoodName" />
                    </div>
                    <div>
                        <label htmlFor="newFoodCalories">New Food Calories</label>
                        <input  id="newFoodCalories" type="text" placeholder="newFoodCalories" />
                    </div>                    
                    <div className="optionaMacros">
                        <h2>New Food Macros</h2>
                        <div>
                            <label htmlFor="NewFoodProtein"></label>
                            <input  id="NewFoodProtein" type="text" placeholder="Protein" />
                        </div>
                        <div>
                            <label htmlFor="NewFoodCarbs"></label>
                            <input  id="NewFoodCarbs" type="text" placeholder="Carbs" />
                        </div>
                        <div>
                            <label htmlFor="NewFoodFat"></label>
                            <input  id="NewFoodFat" type="text" placeholder="Fat" />
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewFood;