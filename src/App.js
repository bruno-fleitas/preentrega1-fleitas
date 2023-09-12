import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import Cart from './Cart';
import ItemListContainer from './ItemListContainer'; 

function App() {
  const [cart, setCart] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false); 

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="container mt-5">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Mi Tienda</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Habla con nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nuestras Redes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tus Compras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Devoluciones</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="row">
          <div className="col-md-8">
            <h2>Productos</h2>
            <div className="product">
              <div className="card">
                <img
                  src="imagen_del_producto.jpg"
                  alt="Producto 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Producto 1</h5>
                  <p className="card-text">$10.00</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart('Producto 1')}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Cart cart={cart} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" /> 
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
