import React from 'react';
import {useState,useEffect} from 'react'
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from "../../utilities/databaseManager";
import fakeData from "../../fakeData"
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { useNavigate } from 'react-router-dom';


const Order = () => {
    const [cart,setCart] = useState([]);
    // Remove Product
    const removeButton = (productKey) => {
        console.log('remove item',productKey);
        const newCart = cart.filter(item => item.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    } 
    const [orderPlace,setOrderPlace] = useState(false);
    // Place Handle CLick
    const handlePlaceOrder= ()=>{
        setCart([]);
        processOrder();
        setOrderPlace(true);
    }
    let thankYou ;
    if (orderPlace) {
        thankYou = <img style={{justifyContent:'center'}} src={happyImage} alt="" srcset="" />
    }
    
const navigate =useNavigate();
    useEffect(()=>{
        // cart 
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd=> pd.key === key);
            product.quantity = (saveCart[key]);
            return product;
        });
        setCart(cartProducts);
    },[])
    return (
        <div className='twin-container'>
        {
            thankYou
        }
        <div className='product-container'>
                
        {
                cart.map(pd => <ReviewItem 
                key={pd.key}
                product={pd} 
                removeButton={removeButton} >
                    
                </ReviewItem>)
            }

        </div>
       
        <div className='cart-container' >
                <Cart cart={cart}> 
                <button onClick={()=>{
                    navigate('/shipment');
                    handlePlaceOrder();
                }} className="button">Place Order</button>
                </Cart>
        </div>
       
        </div>
    );
};

export default Order;