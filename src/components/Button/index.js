import React from "react";
import "./style.scss";

function Button(props) {
  return (
    <button
      className="resetButton"
      type={props.type}
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
}

export default Button;
