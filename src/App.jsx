// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Auth';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CategoryDetail from './pages/CategoryDetail';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/categories/:id" component={CategoryDetail} />
            
            {/* PrivateRoute kullanarak favori sayfasını koruma */}
            <PrivateRoute path="/favorites" component={Favorites} />

            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
