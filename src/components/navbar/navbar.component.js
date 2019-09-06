import React, { Component } from "react";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav className="rounded m-2 navbar navbar-dark bg-secondary navbar-expand-sm">
        <ul className="navbar-nav">
          <li className="page-item">
            <a className="text-white nav-link" href="#">
              Home
            </a>
          </li>
          <li className="">
            <a className="text-white nav-link" href="#">
              About
            </a>
          </li>
          {/* <li className="">
            <a class="text-white nav-link" href="#">
              Wallets
            </a>
          </li> */}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
