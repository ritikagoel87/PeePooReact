import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const SERVER_URL = "https://pee-poo-rails.herokuapp.com/amenities/";
const LOCATION_URL = 'https://pee-poo-rails.herokuapp.com/locations/';

class SearchAmenity extends Component {
  constructor() {
    super();
    this.state = { amenity: {}, location: {} };
  }

  componentDidMount () {
    console.log(this.props.match.params.id);
    const handle = this.props.match.params.id;

    axios.get(`${SERVER_URL}${handle}.json`).then((result) => {
      console.log(result);

      let location = LOCATION_URL + result.data.location_id + '.json';
      axios.get(location).then( (res) => {
        this.setState({location: result.data});
      });

      this.setState({amenity: result.data});
    })
  }

  render() {
    return (
      <div>
      <Navbar />
      <AmenityDetails details= { this.state.amenity } loc={ this.state.location } />
      </div>
    );
  }
}

class AmenityDetails extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <label>Price: {this.props.details.price}</label>
          <label>Rating: {this.props.details.rating}</label>
          <label>Toilet: {this.props.details.toilet}</label>
          <label>Bath: {this.props.details.bath}</label>
          <label>Shower: {this.props.details.shower}</label>
          <label>Baby: {this.props.details.baby}</label>
        </div>

        <picture>
            <a target="_blank" rel="noopener noreferrer"><img className="img-fluid img-thumbnail img-rounded" src={this.props.details.image} alt=""/></a>
        </picture>
      </div>
    );
  }
}

export default SearchAmenity;
