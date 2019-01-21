import React from "react";

const Info = ({ user, cssFontcolor }) => {
  const { userfbURL, name } = user;
  // const style = {
  //   color: { cssFontcolor? "#365899" : null},
  //   fontWeight: "600",
  // };
  return (
    <React.Fragment>
      <p className="h6">
        <a
          style={{
            color: cssFontcolor ? cssFontcolor : null,
            fontWeight: "600",
          }}
          href={userfbURL}>
          {name}
        </a>
      </p>
    </React.Fragment>
  );
};

export default Info;
