import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakeDB';
import CartArea from '../CartArea/CartArea';
import ReviewItem from './ReviewItem';

const OrderReview = () => {
    const history = useHistory();
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    
    const handlePlaceOrder = () => {
        history.push('/place-order')
        setCart([]);
        clearTheCart();
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '70%'}}>
                {
                    cart.map(product => <ReviewItem key={product.key} product={product} handleRemove={handleRemove}></ReviewItem>)
                }
            </div>
            <div style={{backgroundColor: 'white', width: '30%', height: '100vh'}}>
                <CartArea cart={cart}>
                    <button onClick={handlePlaceOrder} style={{backgroundColor: 'gold', width: '180px', cursor: 'pointer', border: '1px solid gray', padding: '10px', fontSize: '1.1em', marginLeft: '110px', marginTop: '30px'}}>Place Order</button>
                </CartArea>
            </div>
        </div>
    );
};

export default OrderReview;