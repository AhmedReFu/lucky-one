import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props;
    //console.log(props)
    const { name, price, img } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />

            <p className='product-name'>Name: {name} </p>
            <p className='product-name'>Price: ${price} </p>
            <button onClick={() => handleAddToCart(product)} className='btn'>

                <p>Add To Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </p>
            </button>
        </div>
    );
};

export default Product;