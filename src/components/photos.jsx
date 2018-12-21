import React from "react";
import Row from "./layout/row";
import GridPhotos from "./layout/gridPhotos";

const Photos = ({ user }) => {
  return (
    <Row>
      <GridPhotos user={user} />
    </Row>
  );
};

export default Photos;
