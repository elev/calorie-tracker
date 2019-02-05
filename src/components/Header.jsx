import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <div className='Header'>
                <Link to="/">
                    <h2 className="title">Calorie Tracker</h2>
                </Link>
                {/* these counts will be dynamic perhaps their own component */}
                <div className="count">Consumed: _700</div>
                <div className="count">Left: _2000</div>
            </div>
        )
    }
}

export default Header;