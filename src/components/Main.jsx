import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Header />

                <Link to="add-food">
                    <button>Add Food</button>
                </Link>
                <Link to="add-exercise">
                    <button>Add Exercise</button>
                </Link>
            </div>
        )
    }
}

export default Main;