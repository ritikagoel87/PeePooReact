import React, { Component } from 'react';
import Navbar from './Navbar';
import BookingForm from './BookingForm';
import axios from 'axios';

const SERVER_URL = "https://pee-poo-rails.herokuapp.com/amenities/";
const LOCATION_URL = 'https://pee-poo-rails.herokuapp.com/locations/';

class SearchAmenity extends Component {
  constructor() {
    super();
    this.state = { amenity: {}, location: {}, availabileTime: [] };
  }

  componentDidMount () {
    console.log(this.props.match.params.id);
    const handle = this.props.match.params.id;

    axios.get(`${SERVER_URL}${handle}.json`).then((result) => {
      console.log(result);

      let location = LOCATION_URL + result.data.location_id + '.json';
      axios.get(location).then( (res) => {
        this.setState({location: res.data});
        let availability = res.data.availableFrom.split('T')[1].split('.')[0];
        availability += " - ";
        availability += res.data.availableTo.split('T')[1].split('.')[0];
        this.setState({availabileTime: availability});
        console.log(availability);
      });

      this.setState({amenity: result.data});
    })
  }

  render() {
    return (
      <div>
      <Navbar />
      <AmenityDetails details={ this.state.amenity } loc={ this.state.location } time={ this.state.availabileTime } />
      <BookingForm amenity={ this.state.amenity.id } price={ this.state.amenity.price } {...this.props} />
      </div>
    );
  }
}

class AmenityDetails extends Component {
  render() {
    return (

      <div className="container">

        <picture>
            <a target="_blank" rel="noopener noreferrer"><img className="img-fluid mx-auto d-block rounded" src={this.props.details.image} alt=""/></a>
        </picture>

        <div className="w-100">
          <p className="w-100 text-center font-italic">"{this.props.loc.description}"</p>
        </div>

        <div className="d-flex">
          <div className="d-flex flex-column p-2">
            <label>Price: {this.props.details.price} per 10mins</label>
            <label>Rating: {this.props.details.rating}</label>
            <label>Toilet: {this.props.details.toilet}</label>
            <label>Bath: {this.props.details.bath}</label>
            <label>Shower: {this.props.details.shower}</label>
            <label>Baby: {this.props.details.baby}</label>
          </div>
          <div className="d-flex flex-column p-2">
            <label>Address: {this.props.loc.house} {this.props.loc.street}, {this.props.loc.suburb}</label>
            <label>Type Of Property: {this.props.loc.typeOfHouse}</label>
            <label>Availability: {this.props.time}</label>
          </div>
        </div>

      </div>
    );
  }
}

export default SearchAmenity;
