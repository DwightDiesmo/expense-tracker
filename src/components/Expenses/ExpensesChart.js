import React from 'react';

import Chart from '../Chart/Chart';

// This has the purpose of passing values into our chart component
// This also calls on our chart component so we can output
// This is then called in the expenses component.
const ExpensesChart = (props) => {
  // Data points passed to the chart
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // Sum the expenses in each month.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  // Return the chart with teh data points passed
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;