import React from "react";
import { Link, NavLink } from "react-router-dom";
import User from "../../user";
import SearchForm from "../../searchForm";
import Row from "../row";

const mainHeader = {
  backgroundColor: "#4267b2",
  height: "43px",
};

const anchorColor = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  marginRight: "5px",
};

const cssCustom = {
  color: "#ffffff",
  fontWeight: "normal",
  fontSize: "12px",
};

const logo = {
  borderRadius: "3px",
  width: "24px",
  height: "24px",
  display: "block",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 442px",
  overflow: "hidden",
};

const Header = ({ user, img, alt }) => {
  const view = true;
  const form = {
    flexWrap: "nowrap",
    width: "calc(100% - 30%)",
    alignItems: "center",
  };

  return (
    <div className="container-fluid" style={mainHeader}>
      <div className="container" style={{ overflow: "hidden", height: "100%" }}>
        <nav
          className="navbar navbar-expand-lg"
          style={{ padding: "0", height: "inherit" }}>
          <Row style={form}>
            <Link className="navbar-brand" to="/" style={anchorColor}>
              <span style={logo}>
                <img src={"assets/img/icons.png"} alt="facebook" />
              </span>
            </Link>
            <SearchForm />
          </Row>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "flex-end", height: "inherit" }}>
            <ul className="navbar-nav">
              <li className="nav-item" id="user-item">
                <User view={view} user={user} cssCustom={cssCustom} />
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={anchorColor}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/find-friends"
                  className="nav-link"
                  style={anchorColor}>
                  Find Friends
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
