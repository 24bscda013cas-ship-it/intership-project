import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Expense");

  const addTransaction = () => {
    if (!amount || !category) {
      alert("Please enter amount and category");
      return;
    }

    setTransactions([
      ...transactions,
      {
        amount: Number(amount),
        category,
        type,
      },
    ]);

    setAmount("");
    setCategory("");
  };

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="container">
      <h1>Daily Expense Analytics Dashboard</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button onClick={addTransaction}>
        Add Transaction
      </button>

      <h2>Balance: ₹{balance}</h2>
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{expense}</h3>

      <ul>
        {transactions.map((item, index) => (
          <li key={index}>
            {item.category} - ₹{item.amount} ({item.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;