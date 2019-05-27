import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

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

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    this.props.history.push("/user");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Create A New Account</h2>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="create-account-form"
        >
          <Grid container className="create-account-grid">
            <Grid item xs={3}>
              <TextField
                label="Username"
                className="sign-in-field"
                placeholder="Username"
                name="username"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Email"
                className="sign-in-field"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Password"
                className="sign-in-field"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          {/* <Button variant="contained" className="sign-in-button">
            Create Account
          </Button> */}
          <button className="sign-in-button">Create Account</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateAccountForm);
