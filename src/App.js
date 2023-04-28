import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id : 'e1',
    title : 'Toilet Paper',
    amount : 49.0,
    date : new Date(2020,2,2),
  },
  {
    id : 'e2',
    title : 'Washing Liquid',
    amount : 650.0,
    date : new Date(2020,2,2),
  },
  {
    id : 'e3',
    title : 'Detergent',
    amount : 490.0,
    date : new Date(2020,2,2),
  },
  {
    id : 'e4',
    title : 'Cleaners',
    amount : 419.0,
    date : new Date(2020,2,2),
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    console.log(expense);
    setExpenses([expense,...expenses]);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
