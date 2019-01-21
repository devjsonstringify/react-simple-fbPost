import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LastOnline = ({ user }) => {
  const { lastOnline } = user;
  const globe = <FontAwesomeIcon icon="globe-asia" />;
  const hrs = <span>hrs</span>;
  return (
    <React.Fragment>
      {lastOnline} {hrs} {globe}
    </React.Fragment>
  );
};

export default LastOnline;
