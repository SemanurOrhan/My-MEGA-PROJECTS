// PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
