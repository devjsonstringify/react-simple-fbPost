import React from "react";
import Col from "./col-grid";
const Photo = ({ user }) => {
  return (
    <Col>
      <img src={user.img} alt={user.alt} />
    </Col>
  );
};

export default Photo;
