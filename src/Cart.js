import React, { useState } from 'react';

const Cart = () => {
const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
    setCartItems([...cartItems, product]);
};

const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item !== product);
    setCartItems(updatedCart);
};

return (
    <div className="container mt-5">
    <h2>Carrito de Compras</h2>
    <ul className="list-group">
        {cartItems.map((product, index) => (
    <li className="list-group-item" key={index}>
            {product}
            <button
            className="btn btn-danger btn-sm float-right"
            onClick={() => removeFromCart(product)}
            >
            Eliminar
            </button>
        </li>
        ))}
    </ul>
    <button className="btn btn-primary mt-3" onClick={() => addToCart('Producto nuevo')}>
        Agregar al carrito
    </button>
    </div>
);
};

export default Cart;
