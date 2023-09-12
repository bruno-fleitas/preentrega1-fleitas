import React from 'react';
import CartWidget from './CartWidget';

function Navbar() {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Mi Tienda</a>
    <button className="navbar-toggler" type="button">
        {/* ... */}
    </button>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="#">Habla con nosotros</a>
        </li>
        </ul>
        <CartWidget />
    </div>
    </nav>
);
}

export default Navbar;
