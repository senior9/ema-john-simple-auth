import React from 'react';
import './Cart.css'

const Cart = (props) => {
const cart= props.cart;
// const total = cart.reduce((total, pd)=> total+pd.price,0)        //Reduce method

// Bangla Style
 let total = 0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
     total = total + product.price;
}

const formatNumber = number=>{
const fixedDecimel = number.toFixed(2);
return Number(fixedDecimel);
}
let shipping = 0;
if (total> 500) {
    shipping = 0;
}
else if (total>20) {
    shipping= 12.99
}
else if (total>200) {
    shipping= 4.99;
}
const tax = (total/10);
const grandTotal = total+shipping+tax;

    return (
        <div >
            <div className='cart'>
            <h2>Ordered Summary</h2>
            <h4>Items Ordered :{cart.length}</h4>
            <h5><small>Shipping Charge: ${formatNumber(shipping)}</small></h5>
            <h5><small>Tax & VAT:${formatNumber(tax)} </small></h5>
            <h4>Total Price: ${formatNumber(grandTotal)}</h4>
            <button className='button'>Place Order</button>
            </div>
        </div>
    );
};

export default Cart;