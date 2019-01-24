import React from "react";
import Col from "./layout/col-grid";

const Content = ({ user }) => {
  const style = { color: "#1d2129", fontSize: "14px" };
  return (
    <Col>
      <p style={style}>{user.content}</p>
    </Col>
  );
};

export default Content;
