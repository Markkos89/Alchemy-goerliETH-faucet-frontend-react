import "./App.jsx";
import "./navbar.css";
import "./index.js";

import React, { Component } from "react";

// The navbar
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="navbar-header">
            <h1>Made by alchemy university</h1>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
