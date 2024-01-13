// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/products">Ürünler</Link>
        </li>
        <li>
          <Link to="/categories">Kategoriler</Link>
        </li>
        <li>
          <Link to="/favorites">Favoriler</Link>
        </li>
        <li>
          <Link to="/cart">Sepet</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
