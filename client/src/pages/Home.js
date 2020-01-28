import React from "react";
import { Link, Redirect, NavLink } from 'react-router-dom'
import GlobalContext from "../context/globalContext";
import Auth from "../utils/Auth";

class Home extends React.Component {
  state = {
    user: {}
  };

  getUser = () =>{
    Auth.getFacebookAuth().then((res) => {
      console.log(res.data)
      this.setState({user:res.data})
    })
  }

  render() {
    const {login, user} = this.context;
    return (
      <>
        <h1>Home Page: {user && user}</h1>
        {/* <Link to="/profile">Test Link</Link> */}
        <button onClick={this.getUser}>Get User Info</button>
        {/* <button onClick={login}>Login</button> */}
        <a href="/auth/facebook">Login to Facebook</a>
        <p>{this.state.user.id}</p>
      </>
    );
  }
}
Home.contextType = GlobalContext;

export default Home;
