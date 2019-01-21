import React, { Component } from "react";

const style = {
  borderRadius: "100%",
  maxWidth: "40px",
  maxHeight: "40px",
};

const Avatar = ({ user }) => {
  const { avatar, name } = user;
  return (
    <React.Fragment>
      <img style={style} className="img-responsive" src={avatar} alt={name} />
    </React.Fragment>
  );
};
export default Avatar;
