import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <div className='Header'>
                <div class="title">This is the header</div>
                {/* these counts will be dynamic perhaps their own component */}
                <div class="count">This is the count</div>
                <div class="count">This is whats left</div>
            </div>
        )
    }
}

export default Header;