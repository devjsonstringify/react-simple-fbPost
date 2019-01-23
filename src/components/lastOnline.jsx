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

  return (
    <React.Fragment>
      {lastseen} {globeIcon}
    </React.Fragment>
  );
};

export default LastOnline;
