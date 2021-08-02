import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expensesFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log(props.expenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpensesFilterChange={expensesFilterChangeHandler}
        selected={filteredYear}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
      ))}
    </Card>
  );
}

export default Expenses;
