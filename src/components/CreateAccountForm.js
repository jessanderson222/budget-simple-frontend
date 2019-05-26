import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class CreateAccountForm extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    img_url: ""
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
        <h2>Create A New Account</h2>
        <form onChange={this.handleChange} className="create-account-form">
          <Grid container className="create-account-grid">
            <Grid item xs={3}>
              <TextField
                label="Username"
                className="sign-in-field"
                placeholder="Username"
                name="username"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Email"
                className="sign-in-field"
                placeholder="Email"
                name="email"
              />
            </Grid>
          </Grid>
          <Grid container className="create-account-grid">
            <Grid item xs={3}>
              <TextField
                label="Profile Picture URL"
                className="sign-in-field"
                placeholder="URL"
                name="img_url"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Password"
                className="sign-in-field"
                placeholder="Password"
                name="password"
              />
            </Grid>
          </Grid>
          <Button variant="contained" className="sign-in-button">
            Create Account
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
