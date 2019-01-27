import React, { Component } from "react";

const defaultSize = {
  borderRadius: "100%",
  maxWidth: "40px",
  maxHeight: "40px",
};

const Avatar = ({ user, view }) => {
  const { avatar, name } = user;
  return (
    <React.Fragment>
      <img
        style={view ? view : defaultSize}
        className="img-responsive"
        src={avatar}
        alt={name}
      />
    </React.Fragment>
  );
};
export default Avatar;
