import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from './Login'
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <SearchForm onSubmit={ this.fetchSerchForm}/>
      <div>
      <h1> About Us </h1>
      <p> We are the best app in the world. Use our toilets and be happy! </p>
      <p>
          <Link to="/amenities">Amenities</Link>
          <br/>
          <Link to="/bookings">Bookings</Link>
          <br/>
          <Link to="/locations">Locations</Link>
          <br/>
          <Link to="/users">Users</Link>

        </p>
        </div>
      </div>
    );
  }
}


export default Home;
