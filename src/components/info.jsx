import React from "react";

const Info = ({ user, cssCustom }) => {
  const { userfbURL, name } = user;
  return (
    <React.Fragment>
      <p style={{ marginBottom: "0" }} className="h6">
        <a style={cssCustom} href={userfbURL}>
          {name}
        </a>
      </p>
    </React.Fragment>
  );
};

export default Info;
