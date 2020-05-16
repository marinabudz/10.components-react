import React from "react";
import Button from "./second-component";
const FirstComponent = props => {
  return <Button onClick={props.calcRandomNumber} />;
};

export default FirstComponent;
