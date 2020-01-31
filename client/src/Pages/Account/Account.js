import React from "react";
import GlobalContext from "../../Context/globalContext";
import Search from "../../components/Search";
import Nav from "../../components/Nav";

class Account extends React.Component {
  state = {};
  
  render() {
    const global = this.context;
    console.log(global);
    return (
      <div>
        <Nav/>
        <h1>User Page: {global.user.displayName}</h1>
        <p>{global.user.displayName}</p>
        <Search />
      </div>
      
    );
  }
}

Account.contextType = GlobalContext;
export default Account;
