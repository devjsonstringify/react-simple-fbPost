import React, { Component } from "react";

const style = {
  borderRadius: "100%",
  maxWidth: "40px",
  maxHeight: "40px",
};

const Avatar = ({ user }) => {
  return (
    <React.Fragment>
      <img
        style={style}
        className="img-responsive"
        src={user.avatarUrl}
        alt={user.name}
      />
    </React.Fragment>
  );
};
export default Avatar;
