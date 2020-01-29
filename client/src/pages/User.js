import React from "react";
import GlobalContext from "../context/globalContext";
import Search from "../components/Search"

class User extends React.Component {
  state = {};
  
  render() {
    const global = this.context;
    console.log(global);
    return (
      <div>
        <h1>User Page: {global.user.displayName}</h1>
        <p>{global.user.displayName}</p>
        <Search />
      </div>
      
    );
  }
}

User.contextType = GlobalContext;
export default User;
