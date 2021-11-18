import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AuthApi from '../api/auth.api';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();

  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    readTokenFromLocalStorage();
  }, []);

  const login = ({ login, password }) => {
    return AuthApi.login({ login, password }).then(() => {
      readTokenFromLocalStorage();
    });
  };

  const logout = () => {
    localStorage.removeItem('Token');
    setIsLogged(false);
    setUsername('');
    history.push('/');
  };

  const readTokenFromLocalStorage = () => {
    const token = localStorage.getItem('Token');
    setIsLogged(!!token);
    if (token) {
      const tokenParsed = jwtDecode(token);
      setUsername(tokenParsed.sub);
      history.push('/home');
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
