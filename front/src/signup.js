import React, { Component } from "react";

class SignUp extends Component {
  state = {
    input: ""
  };

  updateEmailField = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <input onChange={this.updateEmailField} type="email" name="email" />
      </div>
    );
  }
}

export default SignUp;
