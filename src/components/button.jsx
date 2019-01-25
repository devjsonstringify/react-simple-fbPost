import React from "react";
import ButtonIcon from "./buttonIcon";

const Button = ({ handleClick, onMouseEnter, onMouseLeave, icon, btn }) => {
  const style = {
    width: "100%",
    border: "0",
  };
  return (
    <button
      onClick={handleClick}
      onMouseEnter={onMouseEnter ? onMouseEnter : null}
      onMouseLeave={onMouseLeave ? onMouseLeave : null}
      style={style}
      type="button"
      className="btn-link btn-lg">
      <ButtonIcon icon={icon} />
      <span style={{ fontSize: "14px", color: "rgb(96, 103, 112)" }}>
        {btn}
      </span>
    </button>
  );
};

export default Button;
