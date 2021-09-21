import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div id="header-container">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
            <div className="searchField">
                <input type="text" placeholder="Type Here To Search" />
                <span><FontAwesomeIcon icon={faShoppingCart} size="1x" />0</span>
            </div>
        </div>
    );
};

export default Header;