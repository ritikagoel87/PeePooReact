import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import Gallery from './Gallery';

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/amenities.json';

class Amenities extends Component {
  constructor() {
    super();
    this.state = {
      amenities: []
    };
  }

  componentDidMount() {
    axios.get(SERVER_URL).then((results) => {
      this.setState({
        amenities: results.data
      });
    });
  }


  render () {
    const {amenities} = this.state;
      return (
        <div className="amenities">
          <Navbar />
          <h1 className="d-flex justify-content-center">All Amenities</h1>
          {
            amenities.length > 0 ? <Gallery amenities={amenities}/> : <div>Loading...</div>
          }
        </div>
      );

  }
};

export default Amenities;
