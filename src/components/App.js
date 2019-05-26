import React, { Component } from "react";
import Home from "./Home";
import BudgetForm from "./BudgetForm";
import RecContainer from "./RecContainer";
import SignInForm from "./SignInForm";
import UserContainer from "./UserContainer";
import CreateAccountForm from "./CreateAccountForm";

import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/create" render={() => <CreateAccountForm />} />
          <Route path="/signin" render={() => <SignInForm />} />
          <Route path="/user" render={() => <UserContainer />} />
          <Route path="/budget" render={() => <BudgetForm />} />
          <Route path="/recommendation" render={() => <RecContainer />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
