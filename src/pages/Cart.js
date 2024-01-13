// Cart.js

import React from 'react';
import { useAuth } from '../Auth';

const Cart = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <div>Giriş yapmadınız. Sepetinizi görmek için giriş yapın.</div>;
  }

  // Sepetteki ürünleri çekmek ve toplam fiyatı hesaplamak için gerekli işlemler burada yapılabilir.

  return (
    <div>
      <h2>Sepetiniz</h2>
      {/* Sepet içeriği ve toplam fiyat burada gösterilebilir. */}
    </div>
  );
};

export default Cart;
