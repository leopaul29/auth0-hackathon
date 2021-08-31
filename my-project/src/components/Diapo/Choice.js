import React from "react";

import "./style.css";

class Choice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      valid: this.props.choice === this.props.answer,
      style: "no-selected",
    };
  }

  handleChange = (e) => {
    this.props.parentCallback()
    this.setState({
      checked: e.target.value,
      style: {
        color: this.state.valid ? "green" : "red",
        "font-size":  this.state.valid ? "24px" : "12px",
      },
    });
  };

  render() {
    return (
      <div className="choice">
        <input
          type="radio"
          name="choice"
          id={"choice_" + this.props.id + "_" + this.props.i}
          onChange={this.handleChange}
        />
        <label htmlFor="choice" className="choice" style={this.state.style}>
          {this.props.choice}
        </label>
      </div>
    );
  }
}

export default Choice;
