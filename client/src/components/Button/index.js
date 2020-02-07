import React from "react";
import "./btn.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({className, children, onClick}) {
  return (
    <button onClick={onClick} className={["custom-button", className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
