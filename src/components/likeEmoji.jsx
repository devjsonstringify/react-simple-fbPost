import React from "react";
import Button from "./button";
import Row from "./layout/row";

const likeEmoji = ({ isVisible }) => {
  const emojis = ["smile", "grin", "angry", "frown"];
  const style = {
    display: "flex",
    width: "calc(100% / 2.5)",
    flexWrap: "nowrap",
    flexDirection: "row",
    borderRadius: "50px",
    position: "absolute",
    left: "0",
    top: "-1.5rem",
    backgroundColor: "#ffffff",
    border: "1px solid #ccd0d5",
  };
  return (
    <div id="emojis" style={isVisible ? style : null}>
      {isVisible
        ? emojis.map((emoji, indx) => {
            return <Button key={indx} icon={emoji} />;
          })
        : null}
    </div>
  );
};

export default likeEmoji;
