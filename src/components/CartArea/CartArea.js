import React from 'react';
import './cart.css';

const CartArea = (props) => {
    const {cart} = props;
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // tax area

    let tax = 0;
    if (total > 0) {
        tax = total / 10;
    }

    // shipping area

    let shipping = 0;
    if (total > 0 && total < 200) {
        shipping = 5;
    }
    else if (total > 200) {
        shipping = 0;
    }

    const grandtotal = total + shipping + tax;

    const formatNumber = (num) => {
        return Number(num.toFixed(2))
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', borderBottom: '2px dashed gray', paddingBottom: '5px' }}>Order Summary</h2>
            <p style={{ textAlign: 'center' }}>Items Ordered: {totalQuantity}</p>
            <div className="center">
               <div>
                    <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product Price: </td>
                            <td>${formatNumber(total)}</td>
                        </tr>
                        <tr>
                            <td>Tax: </td>
                            <td>${formatNumber(tax)}</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '0.5px solid black', paddingBottom: '5px' }}>Shipping: </td>
                            <td style={{ borderBottom: '0.5px solid black', paddingBottom: '5px' }}>${shipping}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total: </td>
                            <td>${formatNumber(grandtotal)}</td>
                        </tr>
                    </tfoot>
                </table>
               </div>
            </div>
            {props.children}
        </div>
    );
};

export default CartArea;