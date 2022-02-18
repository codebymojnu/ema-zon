import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller, price, stock, star} = props.product;
    return (
        <div style={{margin: '10px', backgroundColor: 'white', display: 'flex', padding: '20px'}}>
           <div style={{marginRight: '10px'}}>
                <img src={img} alt={seller}/>
           </div>
           <div>
                <h4 style={{color: 'blue'}}>{name}</h4>
                <p>by- {seller}</p>
                <p>price: ${price}</p>
                <p>Only {stock} left stock - order soon</p>
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly/>
                <br/>
                <br/>
                <button style={{backgroundColor: 'gold', width: '180px', cursor: 'pointer', border: '1px solid gray', padding: '10px', fontSize: '1.1em'}} onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} style={{marginRight: '12px'}}/>Add to Cart</button>
           </div>
        </div>
    );
};

export default Product;