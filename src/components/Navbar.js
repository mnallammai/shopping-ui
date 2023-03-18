import React from 'react';

import Menu from '../svgs/menu.svg';
import Profile from '../svgs/profile.svg';
import Search from '../svgs/search.svg';
import ShoppingCart from '../svgs/shopping-cart.svg';

function NavBar() {
    return (
        <nav class="navbar">
            <div>
                <img class="svg-icon" src={Menu} alt="Menu" />
            </div>
            <div class="right">
                <img class="svg-icon" src={Search} alt="Search" />
                <img class="svg-icon" src={ShoppingCart} alt="Cart" />
                <img class="svg-icon" src={Profile} alt="Profile" />
            </div>
        </nav>
    )
}

export default NavBar;