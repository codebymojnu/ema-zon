import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import CartArea from '../CartArea/CartArea';
import Product from '../Product/Product';

const Products = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '70%' }}>
                {
                    products.map(product => <Product product={product} key={product.key} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div style={{ margin: '10px', backgroundColor: 'white', width: '30%', height: '400px', padding: '5px' }}>
                <CartArea cart={cart}></CartArea>
            </div>
        </div>
    );
};

export default Products;