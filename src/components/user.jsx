import React, { Component } from "react";
import Avatar from "./avatar";
import Info from "./info";
import Col from "./layout/col-grid";
import LastOnline from "./lastOnline";
import ButtonIcon from "./buttonIcon";
import Row from "./layout/row";

const User = ({ user, cssFontcolor, cssFontSize, view }) => {
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

  const flex = {
    display: "flex",
  };

  const isView = {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    padding: "5px",
  };

  const customSize = {
    borderRadius: "100%",
    maxWidth: "30px",
    maxHeight: "30px",
  };
  return (
    <Col col="lg-12" style={avatar}>
      <figure className="figure" style={view ? isView : flex}>
        <Avatar view={view ? customSize : null} user={user} />
        <figcaption style={figcaption} className="figure-caption">
          <Info
            user={user}
            cssFontcolor={cssFontcolor}
            cssFontSize={cssFontSize}
          />
          {view ? null : <LastOnline user={user} />}
        </figcaption>
      </figure>
      {view ? null : <ButtonIcon icon="ellipsis-h" />}
    </Col>
  );
};

export default User;
