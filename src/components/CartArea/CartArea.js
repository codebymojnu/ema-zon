import React from 'react';

const CartArea = (props) => {
    const total = props.cart.reduce( (total, element) => total + element.price, 0);

    // tax area

    let tax = 0;
    if(total > 0){
        tax = total/10;
    }

    // shipping area

    let shipping = 0;
    if(total > 0 && total < 200){
        shipping = 5;
    }
    else if(total > 200){
        shipping = 0;
    }

    const grandtotal = total + shipping + tax;

    const formatNumber = (num) => {
        return Number(num.toFixed(2))
    }

    return (
        <div>
            <h2 style={{textAlign: 'center', borderBottom: '2px dashed gray', paddingBottom: '5px'}}>Order Summary</h2>
            <p>Items Ordered: {props.cart.length}</p>
            <p>Total Product Price: ${formatNumber(total)}</p>
            <p>Tax: ${formatNumber(tax)}</p>
            <p>Shipping: ${shipping}</p>
            <h3 style={{textAlign: 'center'}}>Total: {formatNumber(grandtotal)}</h3>
        </div>
    );
};

export default CartArea;