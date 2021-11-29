import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const API_URL = "https://identitytoolkit.googleapis.com";
const API_KEY = "AIzaSyBkROQ0ksWxiq5QpJpyfC0YKZHl-KCFr08";

const APPLICATION_JSON = "application/json";
const CONTENT_TYPE_JSON_HEADER = { "Content-Type": APPLICATION_JSON };

const signIn = (email, password) => {
  return sendPost("signInWithPassword", email, password);
};

const signUp = (email, password) => {
  return sendPost("signUp", email, password);
};

const sendPost = (method, email, password) => {
  return fetch(`${API_URL}/v1/accounts:${method}?key=${API_KEY}`, {
    method: "POST",
    headers: { ...CONTENT_TYPE_JSON_HEADER },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const userInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const email = userInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (isLogin) {
      setIsLoading(true);
      signIn(email, password)
        .then((response) => {
          setIsLoading(false);
          if (response.ok) {
            return response.json();
          } else {
            response
              .json()
              .then((data) => {
                let errorMessage = "Sign up failed: ";
                if (data?.error?.message) {
                  errorMessage = errorMessage + data.error.message;
                }
                console.log("ret a", errorMessage);
                throw new Error(errorMessage);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .then((data) => {
          console.log("sign in successful", data);
        });
    } else {
      setIsLoading(true);
      signUp(email, password).then((response) => {
        setIsLoading(false);
        if (response.ok) {
          //cool cool cool
        } else {
          response.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data?.error?.message) {
              errorMessage = errorMessage + data.error.message;
            }
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={userInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
