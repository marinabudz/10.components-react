import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./Task-2/main-component";
import InsertField from "./Task-1/insert";

const App = () => {
  const style = {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    border: "2px solid black",
    textAlign: "center"
  };
  return (
    <div style={style}>
      <p> First task</p>
      <InsertField />
      <p>Second task</p>
      <MainComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
