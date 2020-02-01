import React from "react";
import GlobalContext from "../../Context/globalContext";
import Search from "../../components/Search";
import Nav from "../../components/Nav";
import Profile from "../../components/Profile"
class Account extends React.Component {
  state = {};
  
  render() {

    return (
      <div>
        <Nav/>
        <h1>User Page: {localStorage.user.displayName}</h1>
        <p>{localStorage.username}</p>
        <Search />
        <Profile />
      </div>
      
    );
  }
}

Account.contextType = GlobalContext;
export default Account;
