import React from "react";

const shareItem = ({ options, option }) => {
  const style = {
    flexDirection: "column",
    alignContent: "end",
    backgroundColor: "#ffffff",
    position: "absolute",
    right: "0",
    top: "0",
    zIndex: "1",
  };
  return (
    <ul className="nav" style={style}>
      {options.map((option) => {
        return (
          <li className="nav-item" key={option.item}>
            <a className="nav-link" href={option.href}>
              {option.item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default shareItem;

/**{options.map( (option) => {
		return <li className="nav-item">
		<a className="nav-link" href={option.link}>
		{option.item}
		</a>
		</li> */
