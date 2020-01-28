import React from "react";
import GlobalContext from "../context/globalContext";

class User extends React.Component {
  state = {};
  
  render() {
    const global = this.context;
    console.log(global);
    return (
      <div>
        <h1>User Page: {global.user.displayName}</h1>
      </div>
    );
  }
}

User.contextType = GlobalContext;
export default User;
