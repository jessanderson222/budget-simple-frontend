import React, { Component } from "react";

class UserContainer extends Component {
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
        <button>My Recommendations</button>
        <br />
        <button>Create a New Budget</button>
      </div>
    );
  }
}

export default UserContainer;
