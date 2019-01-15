import React from "react";
import Photo from "./photo";

const GridPhotos = ({ user }) => {
  const img = user.photos.map((photo, indx) => {
    return <Photo user={photo} key={indx} />;
  });

  return <React.Fragment>{img}</React.Fragment>;
};

export default GridPhotos;
