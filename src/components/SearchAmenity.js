import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const SERVER_URL = "https://pee-poo-rails.herokuapp.com/amenities/";

class SearchAmenity extends Component {
  constructor() {
    super();
    this.state = { amenity: {} };
  }

  componentDidMount () {
    console.log(this.props.match.params.id);
    const handle = this.props.match.params.id;

    axios.get(`${SERVER_URL}${handle}.json`)
      .then((result) => {
        console.log(result);
        this.setState({ amenity: result.data });
      })
  }

  render() {
    return (
      <div>
      <Navbar />
      <AmenityDetails details= { this.state.amenity } />
      </div>
    );
  }
}

class AmenityDetails extends Component {
  render() {
    return (
      <div className="container">
        {this.props.details.id}
      </div>
    );
  }
}

export default SearchAmenity;
