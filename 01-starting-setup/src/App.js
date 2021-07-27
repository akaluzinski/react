import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Something's happening</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
