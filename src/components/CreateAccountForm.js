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
      [e.target.label]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Create A New Account</h2>
        <form classname="create-account-form">
          <Grid container spacing={3} className="create-account-grid">
            <Grid item xs={3}>
              <TextField
                label="Username"
                className="sign-in-field"
                placeholder="Username"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Email"
                className="sign-in-field"
                placeholder="Email"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className="create-account-grid">
            <Grid item xs={3}>
              <TextField
                label="Profile Picture URL"
                className="sign-in-field"
                placeholder="URL"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Password"
                className="sign-in-field"
                placeholder="Password"
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
