import React from 'react';
import img from '../../images/lifeHacks.png'
const PlaceOrder = () => {
    return (
        <div style={{width: '800px', margin: '0 auto'}}>
            <h2 style={{marginBottom: '40px'}}>Thank you for shopping with us. Your order is successfully placed</h2>
            <img src={img} alt="place order"/>
        </div>
    );
};

export default PlaceOrder;