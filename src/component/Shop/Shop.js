import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/product-data';
import Orders from '../Orders/Orders';

const Shop = () => {
    let keyCount = 999;
    const [items, setItems] = useState([]);
    let [carts, setCarts] = useState([]);
    useEffect(() => {
        // fetch('./products.JSON')
        //     .then(resp => resp.json())
        //     .then(fakeData => setItems(fakeData.slice(0, 10)));
        setItems(fakeData.slice(0, 10))

        let getLS = JSON.parse(localStorage.getItem('cart')) || [];
        setCarts(getLS);
    }, [])

    let addToCart = product => {
        let newCart;
        let isExist = false;

        carts?.forEach(cart => {
            if (cart.key === product.key) {
                cart['nborder'] = cart['nborder'] + 1;
                isExist = true;
            }
        })

        if (!isExist) {
            product['nborder'] = 1;
            newCart = [...carts, product];
            localStorage.setItem('cart', JSON.stringify(newCart));
            setCarts(newCart);
        }
        else {
            newCart = [...carts];
            setCarts(newCart);
            localStorage.setItem('cart', JSON.stringify(carts));
        }
    }
    let showOrders = () => {
        document.querySelector('.products-container').style.display = 'none';
        document.querySelector('.orders').style.display = 'block';
    }
    return (
        <div id="shop-container">
            <div className="orders">
                <Orders products={carts}></Orders>
            </div>
            <div className="products-container">
                {
                    items?.map((pd) => <Product product={pd} key={pd?.key || ++keyCount} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts} showOrders={showOrders}></Cart>
            </div>
        </div>
    );
};

export default Shop;