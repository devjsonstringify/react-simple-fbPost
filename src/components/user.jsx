import React, { Component } from "react";
import Avatar from "./avatar";
import Info from "./info";
import Col from "./layout/col-grid";
import LastOnline from "./lastOnline";
import ButtonIcon from "./buttonIcon";
import Row from "./layout/row";

const User = ({ user, cssFontcolor }) => {
  const figcaption = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  };
  const avatar = {
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <Col col="lg-12" style={avatar}>
      <figure className="figure" style={{ display: "flex" }}>
        <Avatar user={user} />
        <figcaption style={figcaption} className="figure-caption">
          <Info user={user} cssFontcolor={cssFontcolor} />
          <LastOnline user={user} />
        </figcaption>
      </figure>
      <ButtonIcon icon="ellipsis-h" />
    </Col>
  );
};

export default User;
