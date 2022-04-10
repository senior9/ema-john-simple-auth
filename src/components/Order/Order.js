import React from 'react';
import {useState,useEffect} from 'react'
import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData"
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';


const Order = () => {
    const [cart,setCart] = useState([]);
    // Remove Product
    const removeButton = (productKey) => {
        console.log('remove item',productKey);
        const newCart = cart.filter(item => item.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    } 
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
                <Cart cart={cart}> </Cart>
        </div>
        </div>
    );
};

export default Order;