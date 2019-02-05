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
                    <label htmlFor="quickAdd">QuickAdd Calories:</label>
                    <input  id="quickAdd" type="text" placeholder="Search" />
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