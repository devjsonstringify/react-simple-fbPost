import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
