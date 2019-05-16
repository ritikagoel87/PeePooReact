import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//const PEEPOO_URL = "https://pee-poo-rails.herokuapp.com/users.json"

class Navbar extends Component {
  
 /*  constructor() {
    super();
    this.state = {
    users: []
    }
  }

  //get the data for users
  
  componentDidMount() {
    axios.get(PEEPOO_URL).then(response => response.data)
    .then((data) => {
      this.setState({users: data})
      console.log(this.state.users)
    })
  } */
 
  //check if already in show the user name and Sing out
 


  render() {
    return (

      
      <div>
      <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand">PeePoo</p>
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

      
        
        {/* 
          {this.state.users.map((user) => (
          <div className="card">
          <div className="card-body">
              <h5 className="card-title">{user.fname}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              {user.email}             
              </h6>
            </div>
          </div>
        ))} */}
        </div>
      
    )
  }
}

export default Navbar;
