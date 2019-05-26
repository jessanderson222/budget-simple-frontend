import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Sign In</h2>
        <form onChange={this.handleChange}>
          <TextField
            label="Email"
            className="sign-in-field"
            placeholder="Email"
            name="email"
          />
          <br />
          <TextField
            label="Password"
            className="sign-in-field"
            placeholder="Password"
            name="password"
          />
          <br />
          <br />
          <Button variant="contained" className="sign-in-button">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
