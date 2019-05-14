import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PEEPOO_URL = "https://pee-poo-rails.herokuapp.com/users.json"

class Navbar extends Component {
  
  constructor() {
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
  }

  //check if already in show the user name and Sing out

  


  render() {
    return (

      
      <div>
      <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand">PeePoo</p>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Sign In </Link>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Sign Up </a>
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
/* 
<div class="my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <% if @current_user.present? %>
              <li class="nav-item">
                <%= link_to "Sign out", login_path, :method => 'delete', :class => 'nav-link' %>
              </li>
            <% else %>
              <li class="nav-item"><%= link_to 'Sign Up', new_user_path, :class => 'nav-link' %></li>
              <li class="nav-item"><%= link_to 'Sign In', login_path, :class => 'nav-link' %></li>
            <% end %>
          </ul>
        </div>
         <div class="container">
      <% if @current_user.present? && @current_user.admin? %>
        <%= link_to "All users", users_path, :class => 'btn btn-info mb-3'%>
 */