import React from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../../avatar";

const mainHeader = {
  backgroundColor: "#4267b2",
  height: "43px",
};

const anchorColor = {
  color: "#ffffff",
};

const Header = ({ user }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg" style={mainHeader}>
          <Link className="navbar-brand" to="/" style={anchorColor}>
            Facebook
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link" style={anchorColor}>
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
