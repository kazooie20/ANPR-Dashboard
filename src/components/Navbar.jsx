import React, { Component } from "react";

function Navbar() {
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand mr-1" href="#">
            <img
              src="./images/newLogo2.png"
              alt="Insert Logo Image"
              className="img-fluid"
              width="130"
              height="80"
            />
          </a>
          <button
            className="btn btn-link btn-sm text-white order-1 order-sm-0"
            id="sidebarToggle"
            href="#"
          >
            <i className="fas fa-bars" />
          </button>

          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link"
                
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-search fa-fw" />
              </a>
            </li>
          </ul>
        </nav>
    )
        
    
    
}

export default Navbar;