import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'; // Importa los estilos

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
    </div>
  );
}

export default CartWidget;

