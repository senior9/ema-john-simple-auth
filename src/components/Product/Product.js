import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>by: {seller}</p>
        <h2>${price}</h2> <br />
        <h4>only {stock} left in stock - order soon</h4>
        <button className="button" onClick={()=>{props.addHandleClick(props.product)}} >
          {" "}
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
