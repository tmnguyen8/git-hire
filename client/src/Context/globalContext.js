import React from "react";

const state = {
  user: false,
  login: () => {}
};

const globalContext = React.createContext(state);

export default globalContext;
