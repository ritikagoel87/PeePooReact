import React, { Component } from 'react';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron">
          <h1 className="display-4"> About Us </h1>
          <p className="lead"> We are the best app in the world. Use our toilets and be happy! </p>
          <hr className="my-4"></hr>
          <p>Find the closiest one!</p>
          <Link className="btn btn-info btn-lg" to="/search" role="button">Search</Link>
        </div>
        <div>
          <Link to="/amenities" className="btn btn-light btn-sm">All Amenities</Link>
          <Link to="/bookings" className="btn btn-light btn-sm">All Bookings</Link>
          <Link to="/locations" className="btn btn-light btn-sm">All Locations</Link>
          <Link to="/users" className="btn btn-light btn-sm">All Users</Link>
        </div>
      </div>
    );
  }
}


export default Home;
