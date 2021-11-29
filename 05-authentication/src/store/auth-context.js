import React, { useState } from "react";

const tokenName = "testtoken";
const expirationTimeToken = "testexptoken";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
});

let logoutTimer;

const getRemainingTime = (expirationTime) => {
  return new Date(expirationTime).getTime() - new Date().getTime();
};

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem(tokenName));
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem(tokenName);
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem(tokenName, token);
    localStorage.setItem(expirationTimeToken, expirationTime);

    const remainingTime = getRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
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
