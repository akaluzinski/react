import { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 1223,
    date: new Date(),
  },
  {
    id: "2",
    title: "Gas",
    amount: 123,
    date: new Date(),
  },
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
