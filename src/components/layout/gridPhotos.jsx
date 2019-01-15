import React from "react";
import Photo from "./photo";

const GridPhotos = ({ user }) => {
  const img = user.photos.map((photo) => {
    // return <Photo user={photo} key={indx} />;
    //  console.log(Object.keys(photo).length);
    console.log(photo.length);
  });

  return <React.Fragment>{img}</React.Fragment>;
};

export default GridPhotos;
