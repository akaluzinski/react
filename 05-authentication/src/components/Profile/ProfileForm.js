import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import classes from "./ProfileForm.module.css";
import { sendPost } from "../Auth/AuthForm";
import AuthContext from "../../store/auth-context";

const update = (idToken, password) => {
  return sendPost("update", { idToken, password });
};

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const newPasswordInputRef = useRef();
  const submitNewPasswordHandler = (event) => {
    event.preventDefault();

    const newPassword = newPasswordInputRef.current.value;

    update(authCtx.token, newPassword).then((response) => {
      console.log("pwdchanged");
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitNewPasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
