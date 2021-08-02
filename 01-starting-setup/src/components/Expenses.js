import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter'
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expensesFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  
  return (
      <Card className="expenses">
      <ExpensesFilter onExpensesFilterChange={expensesFilterChangeHandler}/>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
