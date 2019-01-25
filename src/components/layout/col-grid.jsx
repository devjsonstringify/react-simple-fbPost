import React from "react";

const colGrid = ({ col, style, children }) => {
  return (
    <div style={style ? style : null} className={col ? "col-" + col : "col"}>
      {children}
    </div>
  );
};

export default colGrid;
