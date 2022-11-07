import React, { useEffect } from "react";
import { useState } from "react";
import fakeData from "../fakeData/products.JSON";
import fakeDb from "../../fakeData"
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import {Link} from 'react-router-dom';

const Shop = () => {

// Add Cart Function 
const [cart, setCart]=useState([]);

useEffect(()=>{
  const savedCart = getDatabaseCart();
  const productKeys = Object.keys(savedCart);
  const previousCart = productKeys.map(existingCartKey=>{
    const product = fakeDb.find(pd => pd.key === existingCartKey);
    product.quantity = savedCart[existingCartKey];
    return product;
  })
  setCart(previousCart);
},[])

  // onCLick Function
  const addHandleClick =(product)=>{
    // Try To Understand This  Function 
    // ** Find quantity from Product and set to cart**
    let toBeAdded = product.key;
    const sameProduct = cart.find(pd=> pd.key===toBeAdded);
    let count = 1;
    let newCart;
   if(sameProduct){
     count = sameProduct.quantity + 1;
    sameProduct.quantity = count ;
    const others = cart.filter(pd=> pd.key !== toBeAdded);
    newCart =[...others,sameProduct]
   }
   else{
    product.quantity =1 ;
   newCart =[...cart, product];
   }
    setCart(newCart);
    
    // session storage + local storage  function
   
    addToDatabaseCart(product.key,count);
  }


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
        <Cart cart={cart} >
        <Link to='/order'><button className="button">Review Order</button> </Link>
        </Cart>

      </div>
    </div>
  );
};

export default Shop;
