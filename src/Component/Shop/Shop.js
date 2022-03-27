import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(
        () => {
            fetch('products.json')
                .then(res => res.json())
                .then(data => setProduct(data));
        }
        , []);

    const handleAddToCart = (product) => {

        const newCart = [...cart, product]

        if (newCart.length === 5) {
            alert('this full')
        }
        else {
            setCart(newCart);
        }
    };

    const choseAgain = () => {
        setCart([])
    };

    return (
        <div className='shop-container'>

            <div className='product-section'>

                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}> </Product>)

                }


            </div>


            <div className='cart-section'>

                <Cart cart={cart} choseAgain={choseAgain} > </Cart>

            </div>



        </div>
    );
};

export default Shop;