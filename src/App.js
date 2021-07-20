// Importing React can be omitted; however, when using useState, we must include this line
import React, { useState } from 'react';

// Importing the two main components that were constructed for this app
import NewExpense from './components/NewExpense/NewExpense.js';
import Expenses from './components/Expenses/Expenses.js';

// This is an array of expenses for initial values. 
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// Standard function for app
const App = () => {
  // When changing the state of our page
  // Dummy is for initial values
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // When we add to our expenses array
  // This function style when handling states is specific to 
  // circumstances where we depend on previous state values.
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

   // (NewExpense) When adding an expense, we point to our event handler function
   // (Expenses) Passing our array of expenses into our component.
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

// Include in every page
export default App;