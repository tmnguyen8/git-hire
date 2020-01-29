import React from "react";

export default props => {
  return (
    <div>
      <nav>
        <button
          onClick={() =>
            props.handleGlobalState("user", {
              name: "Patrick"
            })
          }>
          Login
        </button>
        <button>Sign Up</button>
      </nav>
      <h1 className="myClass">Test</h1>
    </div>
  );
};
