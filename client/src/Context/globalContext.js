import React from "react";
// import Auth from "../utils/Auth";

const state = {
  user: false
};

const globalContext = React.createContext(state);

export default globalContext;
