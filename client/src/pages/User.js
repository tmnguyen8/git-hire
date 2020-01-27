import React from "react";
import GlobalContext from "../Context/globalContext";

class User extends React.Component {
  state = {};
  render() {
    const global = this.context;
    console.log(global);

    return <h1>User Page: {global.user}</h1>;
  }
}

User.contextType = GlobalContext;
export default User;
