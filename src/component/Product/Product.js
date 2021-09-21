import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    let { name, seller, img, price, stock, features } = props.product;
    return (
        <div className="single-product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="productName">{name}</h3>
                <p><small>by:</small> {seller}</p>
                <div className="product-more-info">
                    <div className="more-info-left">
                        <p>$<span>{price}</span></p>
                        <p className="stockMessage">only {stock} left in stock - order soon</p>
                        <button className="cartBtn" onClick={() => props.addToCart(props.product)}>
                            <span><FontAwesomeIcon icon={faShoppingCart} size="1x" />add to cart</span>
                        </button>
                    </div>
                    <div className="more-info-right">
                        <h4>Features</h4>
                        <ul className="product-description-ul">
                            {
                                features?.map((pd, index) => {
                                    return <li key={index}>{pd?.description} : <strong>{pd?.value}</strong></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;