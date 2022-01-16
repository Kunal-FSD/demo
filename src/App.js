import "./App.css";

import Expenses from "./component/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Bath Soap",
      amount: 52.5,
      date: new Date(2021, 9, 14),
    },
    {
      id: "e2",
      title: "ToothBrush",
      amount: 50,
      date: new Date(2021, 9, 28),
    },
    {
      id: "e3",
      title: "Shampoo",
      amount: 98,
      date: new Date(2021, 10, 5),
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 20,
      date: new Date(2022, 0, 12),
    },
  ];
  return (
    <div className="App">
      <h1> Expense Chart</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
