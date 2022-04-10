// import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Product from '../Product/Product';
import fakeData from '../../fakeData'


const ProductDetail = () => {
    // console.log(fakeData);
    let {productKey} = useParams();
  
    
    const sameProductKey = fakeData.find((pd)=> (pd.key===productKey));
    console.log(sameProductKey);
    return (
        <div>
            <h1>{productKey} Your product Details Here.</h1>
            <Product showAddToCart={false} product={sameProductKey} ></Product>
        </div>
    );
};

export default ProductDetail;