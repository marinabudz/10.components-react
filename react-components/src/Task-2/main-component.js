import React from "react";
import FirstComponent from "./first-component";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomNumber: null, newRandom: null };
    this.calcRandomNumber = this.calcRandomNumber.bind(this);
  }
  calcRandomNumber() {
    const randomNumber = Math.round(Math.random() * 1000);
    this.setState({
      randomNumber: randomNumber,
      newRandom: randomNumber * 1000
    });
  }

  render() {
    return (
      <div>
        <FirstComponent
          {...this.state}
          calcRandomNumber={this.calcRandomNumber}
        />
      </div>
    );
  }
}

export default MainComponent;
