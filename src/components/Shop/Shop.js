import React, { useEffect } from "react";
import { useState } from "react";
import fakeData from "../fakeData/products.JSON";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {



  // onCLick Function
  const addHandleClick =(product)=>{
    const newCart =[...cart, product];
    setCart(newCart);
    // session storage + local storage  function
    const sameProduct = newCart.filter(pd=> pd.key===product.key)
    const count = sameProduct.length
    addToDatabaseCart(product.key,count);
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
    <div className="twin-container">
      <div className="product-container">
        {first10.map((pd) => (
          <Product showAddToCart={true}
          addHandleClick={addHandleClick}
          product={pd} key = {pd.key} >
            

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
