import React, { Component } from "react";

import "./User.scss";

class User extends Component {
  render() {
    return <li className="user">{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className="user">{props.name}</li>;
// };

export default User;
