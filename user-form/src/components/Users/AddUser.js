import React, { useState } from "react";
import Card from "../UI/card/Card";

import classes from "./AddUser.module.css";
import Button from "../../components/UI/button/Button";
import ErrorModal from "../UI/error_modal/ErrorModal";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUser.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Entered user is incorrect. Please enter non-empty value'
      });      
      return;
    }

    if (!enteredAge.trim().length || +enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Entered age is incorrect. Please enter non-negative (>0) number'
      });      
      return;
    }

    props.onAddUser(enteredUser, enteredAge);
    setEnteredAge("");
    setEnteredUser("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  };

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onOkButtonClick={errorHandler}></ErrorModal> }
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUser}
          onChange={usernameChangeHandler}
        ></input>

        <label htmlFor="age">Age (years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
