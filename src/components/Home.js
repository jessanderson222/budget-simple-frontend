import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>home</h3>
        <Button>Sign In</Button>
        <Button>Create Account</Button>
        <button className="sign-in">Sign In</button>
        <button className="sign-in">Create Account</button>
      </div>
    );
  }
}

export default Home;
