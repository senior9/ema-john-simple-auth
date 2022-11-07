import React from "react";
import "./Cart.css";


const Cart = (props) => {
  const cart = props.cart;
  // const total = cart.reduce((total, pd)=> total+pd.price,0)        //Reduce method

  // Bangla Style
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity;
    debugger;
  }

  const formatNumber = (number) => {
    const fixedDecimel = number.toFixed(2);
    return Number(fixedDecimel);
  };
  let shipping = 0;
  if (total > 500) {
    shipping = 0;
  } else if (total > 20) {
    shipping = 12.99;
  } else if (total > 200) {
    shipping = 4.99;
  }
  const tax = total / 10;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <div className="cart">
        <p>
          <span>Ordered Summary</span>
        </p>
        <hr/>
        <p>
         <span> Items Ordered :</span>
          <span>{cart.length}</span>
        </p>
         <hr/>
        <p>
          <span>Shipping Charge: </span>
          <span>${formatNumber(shipping)}</span>
        </p>
        <hr/>
        <p>
          <span>Tax & VAT:</span>
          <span>${formatNumber(tax)}</span>
        </p>
        <hr/>
        <p>
          <span>Total Price:</span>
           <span>${formatNumber(grandTotal)}</span>
        </p>
        
        <br />
        {
          props.children
        }
        
        
      </div>
      
    </div>
  );
};

export default Cart;
