import React from "react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="southpark">
          <a href="https://react-g2wgdx.stackblitz.io/">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/en/4/41/South_Park_main_characters.png"
              }
              className="logo navbar"
            />
          </a>
        </div>
        <a className="navbar-brand" href="#" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse space " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active home" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/features"
                className="nav-link active features"
                aria-current="page"
              >
                Watch
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/shop"
                className="nav-link active features shop"
                aria-current="page"
              >
                Characters
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/more"
                className="nav-link active features shop more"
                aria-current="page"
              >
                More
              </Link>
            </li>
          </ul>
          <img
            src={
              "https://ih1.redbubble.net/image.1487598266.6276/st,small,507x507-pad,600x600,f8f8f8.jpg"
            }
            className="kennylogo"
          />
          <span className="navbar-text">“Oh my god, they killed Kenny!”</span>
        </div>
      </div>
    </nav>
  );
}
