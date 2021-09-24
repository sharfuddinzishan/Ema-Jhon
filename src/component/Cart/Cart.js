import React from 'react';
import './Cart.css'
const Cart = props => {
    let FixedNum = num => {
        let convert = num.toFixed(2);
        return Number(convert);
    };
    let priceTotal = props.carts.reduce((priceTotal, item) => priceTotal + FixedNum(item.price * item.nborder), 0);
    priceTotal = FixedNum(priceTotal);
    let shippingTotal = props.carts.reduce((shippingTotal, item) => shippingTotal + FixedNum(item.shipping * item.nborder), 0);
    shippingTotal = FixedNum(shippingTotal)
    let subtotal = FixedNum(priceTotal + shippingTotal);
    let tax = subtotal * .1;
    tax = FixedNum(tax);
    let total = FixedNum(subtotal + tax);

    return (
        <>
            <h1 className="orderSummary">Order Summary</h1>
            <p className="order-count">Items ordered: {props.carts.reduce((orderTotal, item) => orderTotal + item.nborder, 0)}</p>
            <table className="cartTable">
                <thead>
                    <tr><th></th><th></th><th></th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td className="itemInfo">${priceTotal}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td className="itemInfo">${shippingTotal}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td className="itemInfo">${subtotal}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td className="itemInfo">${tax}</td>
                    </tr>
                    <tr>
                        <td>Order Total:</td>
                        <td className="itemInfo">${total}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">
                            <button className="reviewBtn" onClick={() => props.showOrders()}>
                                <span>Review Your Order</span>
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

export default Cart;