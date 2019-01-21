import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const FindFriends = () => {
  const style = {
    marginTop: "4%",
  };
  return (
    <Router>
      <div className="container" style={style}>
        <h2>Find Friends</h2>
      </div>
    </Router>
  );
};

export default FindFriends;
