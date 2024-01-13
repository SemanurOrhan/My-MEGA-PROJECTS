// Auth.js

import React, { createContext, useContext, useState } from 'react';

// Auth context oluşturuluyor.
const AuthContext = createContext();

// AuthProvider bileşeni, Auth context'inin sağlanması ve oturum durumunu yönetir.
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Kullanıcı girişi başarılı olduğunda yapılacak işlemler
    setLoggedIn(true);
  };

  const logout = () => {
    // Kullanıcı çıkışı yapıldığında yapılacak işlemler
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook'u, Auth context'ini kullanarak oturum durumunu yönetir.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
