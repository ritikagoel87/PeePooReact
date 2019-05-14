import React, { Component } from 'react';


class Navbar extends Component {

  //check if already in show the user name and Sing out
  render() {
    return (

      

      <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand">PeePoo</p>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="nav-link" href="#">Sign In </button>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Sign Up </a>
            </li>
          </ul>
        </div>
      </nav>

      
    )
  }
}

export default Navbar;

