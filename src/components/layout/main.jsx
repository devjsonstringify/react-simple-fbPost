import React from "react";

const style = {
  marginTop: "4%",
};
const Main = ({ children }) => {
  return (
    <div className="container" style={style}>
      <div className="row">
        <div className="col-md-6 offset-md-3">{children}</div>
      </div>
    </div>
  );
};

export default Main;
