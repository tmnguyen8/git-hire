import React from "react";
// import React, { useState, useEffect, useContext } from "react";
// import GlobalContext from "../../Context/globalContext";
import Nav from "../../components/Nav"; 
import API from "../../utils/API";



class Account extends React.Component {
  state = {
    userSavedJobs: []
  };

  
  getFavorite = () =>{
    console.log('testing from client')
    const userLocalStorage = JSON.parse(localStorage.getItem('user'))
    var username = userLocalStorage.username;

    API.getSavedJobByUser(username).then((res)=>{
        console.log(res)
      }).catch(err=>console.log(err))
  }

  render() {

    // const global = this.context;

    return (
      <div>
        <Nav/>
        <button onClick={this.getFavorite}>Get Fav</button>
      </div>
      
    );
  }
}

// Account.contextType = GlobalContext;
export default Account;
