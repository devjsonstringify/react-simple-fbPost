import React from "react";
import Col from "../components/layout/col-grid";

const UserOptions = () => {
  const options = [
    {
      href: "http://domain.com",
      item: "Save video",
    },
    {
      href: "http://domain.com",
      item: "Hide post",
    },
    {
      href: "http://domain.com",
      item: "Unfollow",
    },
  ];

  const option = options.map((item) => <li>{item.item}</li>);
  return (
    <Col>
      <ul>{option}</ul>
    </Col>
  );
};

export default UserOptions;
