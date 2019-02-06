import React, { Component } from 'react';
import Header from './Header';


class NewExercise extends Component {
    render() {
        return (
            <div className="new-exercise">
                <Header />
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
        )
    }
}
    
export default NewExercise;
