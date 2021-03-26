import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import authContext from '../../context/auth/authContext';
import { setToken } from '../../axios/axiosClient';

const PrivateRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem('token');
  const { getCurrentUser } = useContext(authContext);

  useEffect(() => {
    if(token) {
      setToken(token);
      getCurrentUser();
    }
  // eslint-disable-next-line
  }, [token]);
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;