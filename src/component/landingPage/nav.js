import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01" >
          <a class="navbar-brand" href="#">
            {" "}
            <h3>
              Food<span>Mood</span>
            </h3>
          </a>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <Link to="/recipes" style={{ textDecoration: "none" }}>
                  <h4 class="nav-link active">Recipe</h4>{" "}
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
