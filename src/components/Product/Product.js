import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div style={{margin: '10px', backgroundColor: 'white', display: 'flex'}}>
           <div style={{marginRight: '10px'}}>
                <img src={img} alt={seller}/>
           </div>
           <div>
                <h4 style={{color: 'blue'}}>{name}</h4>
                <p>by- {seller}</p>
                <p>price: ${price}</p>
                <p>Only {stock} left stock - order soon</p>
                <button style={{backgroundColor: 'gold', width: '100px', cursor: 'pointer', border: '1px solid gray'}} onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
           </div>
        </div>
    );
};

export default Product;