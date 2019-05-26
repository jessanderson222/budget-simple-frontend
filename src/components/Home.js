import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

class Home extends Component {
  signInClick = e => {
    e.preventDefault();
    this.props.history.push("/signin");
  };

  createAccountClick = e => {
    e.preventDefault();
    this.props.history.push("/create");
  };

  render() {
    return (
      <div>
        <h1>Budget App</h1>

        <h3>Sign in to learn how to spend your $Mon-ay$</h3>
        <br />
        <Button variant="contained" onClick={this.signInClick}>
          Sign In
        </Button>
        <p onClick={this.createAccountClick}>
          Don't have an account? Create one here.
        </p>
      </div>
    );
  }
}

export default withRouter(Home);
