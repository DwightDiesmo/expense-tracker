import React from 'react';

import './ChartBar.css';

// Component for the actual bar which will be multiplied in the chart
const ChartBar = (props) => {
  // Set default fill to 0
  let barFillHeight = '0%';

  // Using max value to generate relatively how high fill should be
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  // Code for actual bar
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;