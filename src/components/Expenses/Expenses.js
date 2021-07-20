import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  // Setting year state
  const [filteredYear, setFilteredYear] = useState('2020');

  // Change year based on filtered choice
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Only showcase the expenses that match the year selected.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Expense Filter allows us to choose the year
  // Expense Chart shows the chart of expenses
  // Expenses List shows the list of expense items
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;