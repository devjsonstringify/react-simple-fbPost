import React from "react";

const Info = ({ user, cssFontcolor, cssfontSize }) => {
  const { userfbURL, name } = user;
  return (
    <React.Fragment>
      <p style={{ marginBottom: "0" }} className="h6">
        <a
          style={{
            color: cssFontcolor ? cssFontcolor : null,
            fontSize: cssfontSize ? cssfontSize : "14px",
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
