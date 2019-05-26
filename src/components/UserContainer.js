import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UserContainer extends Component {
  handleRecommendations = e => {
    e.preventDefault();
    this.props.history.push("/recommendation");
  };

  handleCreateBudget = e => {
    e.preventDefault();
    this.props.history.push("/budget");
  };

  render() {
    return (
      <div>
        <h3>Username</h3>
        <img
          height="200px"
          className="profile-pic"
          src="https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg"
          alt="profile-pic"
        />
        <br />
        <button onClick={e => this.handleRecommendations(e)}>
          My Recommendations
        </button>
        <br />
        <button onClick={e => this.handleCreateBudget(e)}>
          Create a New Budget
        </button>
      </div>
    );
  }
}

export default withRouter(UserContainer);
