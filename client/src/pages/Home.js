import React from "react";
import { Link, Redirect, NavLink } from 'react-router-dom'
import GlobalContext from "../context/globalContext";
import Auth from "../utils/Auth";

class Home extends React.Component {
  state = {
    user: {},
    photo: {}
  };

  getUser = () =>{
    Auth.getFacebookAuth().then((res) => {
      console.log(res.data)
      this.setState({
        user:res.data,
        photo: res.data.photos[0]
      })
    })
  }

  render() {
    const {login, user} = this.context;
    return (
      <>
        <h1>Home Page: {user && user}</h1>
        {/* <Link to="/profile">Test Link</Link> */}
        <a className="btn btn-secondary" onClick={this.getUser}>Get User Info</a>
        {/* <button onClick={login}>Login</button> */}
        
        <a className="btn btn-primary" href="/auth/facebook">Login to Facebook</a>
        <a className="btn btn-primary" href="/auth/logout">Logout of Facebook</a>
        <a className="btn btn-primary" href="/profile">User Profile</a>
        <p>{this.state.user.id}</p>
        <p>{this.state.user.displayName}</p>
        <img src={this.state.photo.value}/>
      
      </>
    );
  }
}
Home.contextType = GlobalContext;

export default Home;
