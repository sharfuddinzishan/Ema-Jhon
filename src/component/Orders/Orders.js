import React from 'react';
import './Orders.css'
const Orders = (props) => {
    return (
        <div>
            {
                props.products?.map((pd) => <li key={pd.key}>{pd.key}</li>)
            }
        </div>
    );
};

export default Orders;