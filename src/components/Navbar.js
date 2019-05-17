import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">PeePoo</Link>
          <div className="navbar-nav">
            <Link to="/search" className="nav-link">Search Amenity</Link> 
          </div>
          <div id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/Sign_in" className="nav-link">Sign In </Link>
              </li>
              <li className="nav-item">
              <Link to="/Sign_up"className="nav-link">Sign Up </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
