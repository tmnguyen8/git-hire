import React from "react";
// import Auth from "../utils/Auth";

// initialize the state: the functions is specified in state from APP.js
const state = {
  user: false,
  handleGithubLogin: ()=>{},
  handleGithubLogout: ()=>{},
  getAccount: () => {},
  favJobList: []
};

const globalContext = React.createContext(state);

export default globalContext;
