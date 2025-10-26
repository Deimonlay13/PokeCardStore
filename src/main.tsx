
import './index.css'
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from './cartas/context/CartContext';
>>>>>>> origin/dev

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
