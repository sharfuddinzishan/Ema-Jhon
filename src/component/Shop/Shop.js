import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';
import fakeData from '../../fakeData/product-data';
import Cart from '../Cart/Cart';

const Shop = () => {
    // const [items, setItems] = useState(sliceProducts);
    // let [carts, setCarts] = useState([]);
    // let addToCart = product => {
    //     let newCart = [...carts, product];
    //     setCarts(newCart);
    // };
    let sliceProducts = fakeData.slice(0, 10);
    let [carts, setCarts] = useState([]);
    useEffect(() => {
        let getLS = JSON.parse(localStorage.getItem('cart'));
        if (!getLS) {
            localStorage.setItem('cart', JSON.stringify(carts));
        }
        else {
            setCarts(getLS);
        }
    }, [])

    let addToCart = product => {
        let newCart = [...carts, product];
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCarts(newCart);
    }
    return (
        <div id="shop-container">
            <div className="products-container">
                {
                    sliceProducts.map((pd) => <Product product={pd} key={pd.key} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;