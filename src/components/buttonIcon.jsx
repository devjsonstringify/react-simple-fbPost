import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = ({ icon, cssCustom }) => {
  const style = {
    marginRight: "10px",
  };
  return (
    <React.Fragment>
      <FontAwesomeIcon style={cssCustom ? cssCustom : style} icon={icon} />
    </React.Fragment>
  );
};

export default ButtonIcon;
