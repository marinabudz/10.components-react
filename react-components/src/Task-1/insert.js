import React from "react";

class InsertField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
    this.changeState = this.changeState.bind(this);
  }
  changeState = element => {
    this.setState({
      text: element.target.value
    });
  };
  render() {
    return (
      <div>
        <input
          placeholder="search"
          value={this.state.value}
          type="text"
          onChange={this.changeState}
        />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default InsertField;
