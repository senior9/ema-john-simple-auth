import React, { useEffect } from "react";
import { useState } from "react";
import fakeData from "../fakeData/products.JSON";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {



  // onCLick Function
  const addHandleClick =(product)=>{
    const newCart =[...cart, product];
    setCart(newCart);
  }
// Add Cart Function 
const [cart, setCart]=useState([]);

// Product Function
  const [product, setProduct] = useState([]);
  const first10 = product.slice(0, 10);
  //  console.log(first10);
  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {first10.map((pd) => (
          <Product 
          addHandleClick={addHandleClick}
          product={pd}>

          </Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} ></Cart>

      </div>
    </div>
  );
};

export default Shop;
