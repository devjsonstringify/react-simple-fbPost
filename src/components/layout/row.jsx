import React from "react";

const Row = ({ children, id, classes, style }) => {
  return (
    <div
      className={classes ? classes : "row"}
      id={id ? id : null}
      style={style ? style : null}>
      {children}
    </div>
  );
};

export default Row;
