import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";

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

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    this.props.history.push("/user");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <TextField
            label="Email"
            className="sign-in-field"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            label="Password"
            className="sign-in-field"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button className="sign-in-button">Sign In</button>
          {/* <Button variant="contained" className="sign-in-button">
            Sign In
          </Button> */}
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
