import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      surname: "",
      password: "",
      passwordCheck: ""
    };
  }
  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateLastName = event => {
    this.setState({ surname: event.target.value });
  };

  updatePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  updatePasswordCheck = event => {
    this.setState({ passwordCheck: event.target.value });
  };

  handleSubmit = () => {
    console.log(JSON.stringify(this.state));
  };

  render() {
    let data = JSON.stringify(this.state);

    return (
      <div>
        <h1>{this.state.value}</h1>

        <form>
          <input
            onChange={this.updateEmailField}
            type="email"
            name="email"
            value={this.state.email}
          />
          <input
            onChange={this.updateName}
            type="Name"
            name="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateLastName}
            type="LastName"
            value={this.state.surname}
          />
          <input
            onChange={this.updatePassword}
            type="password"
            value={this.state.password}
          />
          <input
            onChange={this.updatePasswordCheck}
            type="password"
            value={this.state.passwordCheck}
          />
          <input onClick={this.handleSubmit} type="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
