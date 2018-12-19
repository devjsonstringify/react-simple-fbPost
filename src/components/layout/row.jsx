import React from "react";

const Row = ({ children, id, classes }) => {
  return (
    <div className={classes ? classes : "row"} id={id ? id : null}>
      {children}
    </div>
  );
};

export default Row;
