import React, { useState } from "react";

const tokenName = "testtoken";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
});

const getRemainingTime = (expirationTime) => {
  return new Date(expirationTime).getTime() - new Date().getTime();
};

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem(tokenName));
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem(tokenName);
  };

  const loginHandler = (token, expirationTime) => {
    console.log("login handler");
    setToken(token);
    localStorage.setItem(tokenName, token);

    const remainingTime = getRemainingTime(expirationTime);
    setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
