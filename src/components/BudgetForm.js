import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class BudgetForm extends Component {
  state = {
    budget: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h4>Budget Form</h4>
        <form onSubmit={e => this.handleSubmit(e)}>
          <TextField
            label="Income (in USD)"
            className="sign-in-field"
            placeholder="0"
            name="budget"
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BudgetForm;
