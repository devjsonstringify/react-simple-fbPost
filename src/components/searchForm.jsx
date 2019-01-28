import React from "react";
import Icon from "./buttonIcon";

const SearchForm = () => {
  const form = {
    display: "flex",
    flexBasis: "100%",
    maxHeight: "24px",
  };
  const input = {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    maxHeight: "24px",
  };
  const searchIcon = {
    color: "#6c757d",
    backgroundColor: "#fff",
    borderColor: "rgba(255, 255, 255, 0)",
    borderRadius: "0",
    display: "flex",
    padding: "3px .375rem",
  };
  return (
    <React.Fragment>
      <form style={form}>
        <div className="form-group" style={{ width: "100%" }}>
          <input
            style={input}
            type="email"
            className="form-control"
            id="search"
            aria-describedby="searchHelp"
            placeholder="Search"
          />
        </div>
        <button style={searchIcon} type="submit" className="btn btn-primary">
          <Icon icon="search" />
        </button>
      </form>
    </React.Fragment>
  );
};

export default SearchForm;
