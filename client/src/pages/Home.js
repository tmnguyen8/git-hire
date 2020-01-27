import React from "react";
import { Link } from 'react-router-dom'
import GlobalContext from "../Context/globalContext";

class Home extends React.Component {
  state = {};
  render() {
    const {login, user} = this.context;
    return (
      <>
        <h1>Home Page: {user && user}</h1>
        <Link to="/safe">Test Link</Link>
        <button onClick={login}>Login</button>
      </>
    );
  }
}
Home.contextType = GlobalContext;

export default Home;
