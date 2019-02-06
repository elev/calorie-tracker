import React, { Component } from 'react';
import Header from './Header';


class NewFood extends Component {
    render() {
        return (
            <div className="new-food">
                <Header />
                { /* make this form a component? But erroring on duplication instead of wrong abstraction right now.*/ }
                <form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" placeholder="Name" />
                    </div>
                    <div>
                        <label htmlFor="calories">Calories: </label>
                        <input id="calories" type="text" placeholder="Calories" />
                    </div>                    
                    <div className="optional-macros">
                        <h2>Optional Macros</h2>
                        <div>
                            <label htmlFor="protein">Protein: </label>
                            <input id="protein" type="text" placeholder="Protein" />
                        </div>
                        <div>
                            <label htmlFor="carbs">Carbs: </label>
                            <input id="carbs" type="text" placeholder="Carbs" />
                        </div>
                        <div>
                            <label htmlFor="fat">Fat: </label>
                            <input id="fat" type="text" placeholder="Fat" />
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewFood;
