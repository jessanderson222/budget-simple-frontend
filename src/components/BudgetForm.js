import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class BudgetForm extends Component {
  state = {
    budget: "",
    yearly: false,
    monthly: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  yearlyHandleChange = e => {
    this.setState({
      yearly: !this.state.yearly
    });
  };
  monthlyHandleChange = e => {
    this.setState({
      monthly: !this.state.monthly
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
          <FormControlLabel
            value="yearly"
            control={<Checkbox color="primary" />}
            label="Yearly"
            labelPlacement="end"
            name="yearly"
            onChange={e => this.yearlyHandleChange(e)}
          />
          <FormControlLabel
            value="monthly"
            control={<Checkbox color="primary" />}
            label="Monthly"
            labelPlacement="end"
            name="monthly"
            onChange={e => this.monthlyHandleChange(e)}
          />

          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BudgetForm;
