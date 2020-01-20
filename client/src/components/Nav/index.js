import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Git Hire
      </a>
      
      <button className ="btn">Account Setting</button>
      <button className="btn">Log Out</button>

    </nav>
  );
}

export default Nav;
