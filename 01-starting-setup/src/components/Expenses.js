import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [appliedFilter, setAppliedFilter] = useState({ yearFilter: 2021 });

  const filterYear = (expense) =>
    expense.date.getFullYear() === appliedFilter.yearFilter;
  const filteredExpenses = props.expenses.filter(filterYear);

  const expensesFilterChangeHandler = (selectedYear) => {
    setAppliedFilter(selectedYear);
  };

  const expensesContent = !filteredExpenses.length ? (
    <p>No expenses found!</p>
  ) : (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpensesFilterChange={expensesFilterChangeHandler}
        selected={appliedFilter.filterYear}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
