import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [appliedFilter, setAppliedFilter] = useState({ yearFilter: 2021 });

  const filterYear = (expense) =>
    expense.date.getFullYear() === appliedFilter.yearFilter;
  const filteredExpenses = props.expenses.filter(filterYear);

  const expensesFilterChangeHandler = (selectedYear) => {
    setAppliedFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpensesFilterChange={expensesFilterChangeHandler}
        selected={appliedFilter.filterYear}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
