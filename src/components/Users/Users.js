import { Component } from "react";
import User from "../User/User";

import "./Users.scss";

class Users extends Component {
  constructor() {
    super();
    this.state = { showUsers: true };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided");
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const userList = (
      <ul>
        {this.props.users.map((user) => {
          return <User key={user.id} name={user.name} />;
        })}
      </ul>
    );

    return (
      <div className="users">
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && userList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className="users">
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
