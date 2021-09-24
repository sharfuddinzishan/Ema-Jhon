import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    let [getCarts, setCarts] = useState([])
    useEffect(() => {
        let cartTotal = JSON.parse(localStorage.getItem('cart')) || 0;
        setCarts(cartTotal)
    }, [])
    return (
        <div id="header-container">
            <img src={logo} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
            <div className="searchField">
                <input type="text" placeholder="Type Here To Search" />
                <span><FontAwesomeIcon icon={faShoppingCart} size="1x" /> {getCarts.length}</span>
            </div>
        </div>
    );
};

export default Header;