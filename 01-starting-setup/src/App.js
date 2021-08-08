import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 1223,
    date: new Date(2021, 2, 2),
  },
  {
    id: "2",
    title: "Gas",
    amount: 123,
    date: new Date(2021, 5, 5),
  },
  {
    id: "3",
    title: "Hamburger",
    amount: 123,
    date: new Date(2020, 1, 3)
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const appExpenseHandler = expense => {
      setExpenses(prevExpeneses => {
        return [expense, ...prevExpeneses];
      });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={appExpenseHandler}></NewExpense>
      <div className="Expenses">
        <Expenses expenses={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
