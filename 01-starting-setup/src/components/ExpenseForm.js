import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle: event.target.value
        }
    });
  };

  const amountChangedHandler = (event) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredAmount: event.target.value
        }
    });
  };

  const dateChangedHandler = (event) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredDate: event.target.value
        }
    });
  };

  return (
    <form>
      <div className="nex-expense_controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
