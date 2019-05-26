import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class CreateAccountForm extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    img_url: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.label]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Create A New Account</h2>
        <form>
          <TextField
            label="Username"
            className="sign-in-field"
            placeholder="Username"
          />
          <br />
          <TextField
            label="Email"
            className="sign-in-field"
            placeholder="Email"
          />
          <br />
          <TextField
            label="Profile Picture URL"
            className="sign-in-field"
            placeholder="URL"
          />
          <br />
          <TextField
            label="Password"
            className="sign-in-field"
            placeholder="Password"
          />
          <br />
          <br />
          <Button variant="contained" className="sign-in-button">
            Create Account
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
