  
import React from 'react';

import './Card.css';

const Card = (props) => {
    // So that we can apply multiple classes onto our custom class
    // While still keeping its private css class hidden.
  const classes = 'card ' + props.className;
  // Allow Card to accep child components
  // This allows the card component to be a wrapper
  return <div className={classes}>{props.children}</div>;
};

export default Card;