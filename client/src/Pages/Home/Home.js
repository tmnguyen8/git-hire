import React from "react";
// import { Link, Redirect, NavLink } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";
// import Auth from "../../utils/Auth";
// import Nav from "../../components/Nav";
import Search from "../../components/Search";


class Home extends React.Component {
  
  
  render() {
    // const {user, login} = this.context;
    
    // let profile;

    // if( localStorage.getItem('user')) {
    //   const userLocalStorage = JSON.parse(localStorage.getItem('user'))
    //   // this.setState({user: userLocalStorage})
    //   profile = <p>{userLocalStorage.username}</p>
    // } else {
    //   profile = <p>{"Please Login!"}</p>
    // }

    const {user} = this.context;

    return (
      <div>
        <Search />
      </div>
    );
  }
}
Home.contextType = GlobalContext;

export default Home;
