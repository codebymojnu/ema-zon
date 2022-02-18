import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import useProducts from '../../hooks/useProducts';

import { addToDb, getStoredCart } from '../../utilities/fakeDB';
import CartArea from '../CartArea/CartArea';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    const [displayProducts, setDisplayProducts] = useState(fakeData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if(products.length){
            const orderItems = getStoredCart();
            const orderItems2 = [];
            for(const key in orderItems){
                const orderItem = products.find(product => product.key === key);
                if(orderItem){
                    const quantity = orderItems[key];
                    orderItem.quantity = quantity;
                    orderItems2.push(orderItem);
                }
            }
            setCart(orderItems2);
        }
        
    }, [products])

    const handleAddProduct = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = (e) =>{
        const searchText = e.target.value;
        const matchItems = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchItems);
    }

    let quantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        quantity = quantity + product.quantity;
    }
    return (
        <>
            <div style={{marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input type="text" onChange={handleSearch} style={{padding: '7px', width: '400px'}} placeholder="Search Product" />
                <div style={{marginLeft: '7px'}}>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
                    <span style={{color: 'black', backgroundColor: 'white', padding: '10px', borderRadius: '50%', fontWeight: 'bold'}}>{quantity}</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '70%' }}>
                    {
                        displayProducts.map(product => <Product product={product} key={product.key} handleAddProduct={handleAddProduct}></Product>)
                    }
                </div>
                <div style={{ margin: '10px', backgroundColor: 'white', width: '30%', height: '400px', padding: '5px' }}>
                    <CartArea cart={cart}>
                        <Link to="/order-review">
                            <button style={{backgroundColor: 'gold', width: '180px', cursor: 'pointer', border: '1px solid gray', padding: '10px', fontSize: '1.1em', marginTop: '40px', marginLeft: '110px'}}>Review Your Order</button>
                        </Link>
                    </CartArea>
                </div>
            </div>
        </>
    );
};

export default Products;