import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TextForm">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className={`navbar-nav me-auto mb-2 mb-lg-0 .text-${
              props.mode === "dark" ? "dark" : "light"
            }`}
          >
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/TextForm"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label htmlFor="form-check-label">{`Enable ${
              props.mode === "light" ? "Dark" : "Light"
            }Mode`}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
// Navbar.defaultProps = {
//   title: "TextUtils",
//   about: "About TextUtils2",
// };
