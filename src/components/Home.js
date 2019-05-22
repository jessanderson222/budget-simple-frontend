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
        <h3>home</h3>
        <Button onClick={this.signInClick}>Sign In</Button>
        <Button onClick={this.createAccountClick}>Create Account</Button>
      </div>
    );
  }
}

export default withRouter(Home);
