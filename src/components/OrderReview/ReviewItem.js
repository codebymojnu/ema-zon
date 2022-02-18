const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product;
    const {handleRemove} = props;

    return(
        <div style={{margin: '10px', backgroundColor: 'white', padding: '7px'}}>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Quantiy: {quantity}</p>
            <button style={{backgroundColor: 'gold', width: '180px', cursor: 'pointer', border: '1px solid gray', padding: '10px', fontSize: '1.1em'}}  onClick={() => handleRemove(key)}>Remove</button>
        </div>
    )
};

export default ReviewItem;