import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Exercise extends Component {
    render() {
        return (
            <div className="Exercise">
                <Header />
                Add Exercise
            </div>
        )
    }
}

export default Exercise;