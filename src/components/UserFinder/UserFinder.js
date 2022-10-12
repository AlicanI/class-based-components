import React, { Fragment, Component } from "react";
import Users from "../Users/Users";
import UsersContext from "../../store/user-context";
import ErrorBoundries from "../Error/ErrorBoundries";

import "./UserFinder.scss";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => {
          return user.name.includes(this.state.searchTerm);
        }),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className="finder">
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundries>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundries>
      </Fragment>
    );
  }
}

// const UserFinder = (props) => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => {
//         return user.name.includes(searchTerm);
//       })
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value.trim().toUpperCase());
//   };

//   return (
//     <Fragment>
//       <div className="finder">
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
