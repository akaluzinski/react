import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [appliedFilter, setAppliedFilter] = useState({ yearFilter: 2021 });


  const filterYear = (expense) => {
    return expense.date.getFullYear() === appliedFilter.yearFilter;
  }

  const expensesFilterChangeHandler = (selectedYear) => {
    setAppliedFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onExpensesFilterChange={expensesFilterChangeHandler} />
      
      {props.expenses.filter(filterYear).map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
