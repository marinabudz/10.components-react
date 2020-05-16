import React from "react";
const Button = props => {
  return (
    <div>
      <button onClick={props.calcRandomNumber}> Calculate Number </button>
      <p>Random Number is {props.randomNumber}</p>
      <p> Multiplied Number is {props.newRandom}</p>
    </div>
  );
};
export default Button;
