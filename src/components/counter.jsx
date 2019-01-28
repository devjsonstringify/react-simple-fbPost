import React from "react";

const Counter = ({ counter, text }) => {
  const style = { color: "#606770", fontSize: "14px" };
  return (
    <React.Fragment>
      <li>
        <span style={style}>
          {counter} {text}
        </span>
      </li>
    </React.Fragment>
  );
};

export default Counter;
