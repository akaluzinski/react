import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

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
      <NewExpense></NewExpense>
      <div className="Expenses">
        <Expenses expenses={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
