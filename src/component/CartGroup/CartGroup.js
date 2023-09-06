import React from 'react';
import Cart from '../Cart/Cart';

const CartGroup = () => {

    const products =[
        {id: 1, name: 'mac book pro', price: 145600},
        {id: 2, name: 'Real pro', price: 14560},
        {id: 3, name: 'iphone pro', price: 45600},
    ]
    return (
        <div className="card-group">
            {
                products.map(product => <Cart 
                    key={product.id}
                    product ={product} 
                    ></Cart>)
            }
        </div>
    );
};

export default CartGroup;