// Products.js

import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API'den ürünleri çekmek için bir servis kullanabilirsiniz.
    // Örnek olarak, statik bir ürün listesi:
    const mockProducts = [
      { id: 1, name: 'Ürün 1', price: 20 },
      { id: 2, name: 'Ürün 2', price: 30 },
      // ...
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <h2>Ürünler</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} TL
            <button onClick={() => /* Sepete ekle fonksiyonu */ }>Sepete Ekle</button>
            <button onClick={() => /* Favorilere ekle fonksiyonu */ }>Favorilere Ekle</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
