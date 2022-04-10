import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quantity,img,key,price} = props.product;
    const cartItemStyles = {
        borderBottom :' 1px solid lightgrey',
        marginLeft: '300px',
        marginBottom: '10px'

    }

    return (
        <div className ={cartItemStyles}>
            <div className ='product'>
            <div><img src={img} alt="" srcset="" /></div>
            <div>
            <p>{name}</p>
            <p>quantity: {quantity}</p>
            <p>Price: {price}</p>
            <button onClick={()=>props.removeButton(key)} className="button">Remove Item</button>
            </div>
            </div>
            
        </div>
    );
};

export default ReviewItem;