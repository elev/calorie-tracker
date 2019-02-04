import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Food extends Component {
    render() {
        return (
            <div className="Food">
                <Header />
                Add Food
            </div>
        )
    }
}

export default Food;