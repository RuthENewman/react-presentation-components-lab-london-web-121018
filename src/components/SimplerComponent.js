// Code SimplerComponent Here
import React from 'react';



const SimplerComponent = (props) => {
  // const handleClick = (event) => event.target.style.color = 'red'
  return (
  <div onClick={props.handleClick}>
  I am just happy
  </div>
);
}

export default SimplerComponent;
