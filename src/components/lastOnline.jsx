import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LastOnline = ({ user }) => {
  const globeIcon = <FontAwesomeIcon icon="globe-asia" />;
  const lastseen = Object.keys(user).map((key) =>
    key == "lastseen"
      ? user[key] === 1
        ? user[key] + " " + "hr"
        : user[key] + " " + "hrs"
      : null
  );

  const style = {
    paddingLeft: "0",
    listStyle: "none",
    display: "flex",
  };

  return (
    <ul style={style}>
      <li style={{ marginRight: "10px" }}>{lastseen}</li>
      <li>{globeIcon}</li>
    </ul>
  );
};

export default LastOnline;
