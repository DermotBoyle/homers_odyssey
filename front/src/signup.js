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
        <form>
          <input onChange={this.updateEmailField} type="email" name="email" />
          <input type="Name" />
          <input type="LastName" />
          <input type="password" />
          <input type="passwordCheck" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
