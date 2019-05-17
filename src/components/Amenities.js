import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import Gallery from './Gallery';

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/amenities.json';
const LOCATION_URL = 'https://pee-poo-rails.herokuapp.com/locations/';

class Amenities extends Component {
  constructor() {
    super();
    this.state = {
      amenities: []
    };
  }

  componentDidMount() {
    let resultsArray = [];
    axios.get(SERVER_URL).then((results) => {
      results.data.map( (r) => {
        let resultObject = {amenity: r};
        let location = LOCATION_URL + r.location_id + '.json';
        axios.get(location).then( (res) => {
          console.log(res.data);
          resultObject.location = res.data;
        });
        resultsArray.push(resultObject);
      });
      this.setState({amenities: resultsArray});
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
