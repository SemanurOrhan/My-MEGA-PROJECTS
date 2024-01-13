// Favorites.js

// Favorites.js

import React from 'react';
import { useAuth } from '../Auth';

const Favorites = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <div>Giriş yapmadınız. Favorilerinizi görmek için giriş yapın.</div>;
  }

  // Favorideki ürünleri çekmek için gerekli işlemler burada yapılabilir.

  return (
    <div>
      <h2>Favorileriniz</h2>
      {/* Favorideki ürünler burada listelenebilir. */}
    </div>
  );
};

export default Favorites;

