import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <div className='Header'>
                <Link to="/">
                    <h2 class="title">Calorie Tracker</h2>
                </Link>
                {/* these counts will be dynamic perhaps their own component */}
                <div class="count">This is the count</div>
                <div class="count">This is whats left</div>
            </div>
        )
    }
}

export default Header;