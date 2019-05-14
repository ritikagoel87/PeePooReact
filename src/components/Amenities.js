import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/amenities.json';

class Amenities extends Component {
  constructor() {
    super();
    this.state = {
      amenities: []
    };

    const fetchAmenities = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({amenities: results.data});
        setTimeout(fetchAmenities, 3000);
      });
    };
    fetchAmenities();
  }


  render () {

      return (
        <div className="amenities">
          <h1>All Amenities</h1>
          <Gallery amenities={ this.state.amenities}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="amenities">
      <h2>Amenities</h2>
        <table className="amenitytable">
        <thead>
        <tr>
          <th>Image</th>
          <th>Location</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Toilet</th>
          <th>Bath</th>
          <th>Shower</th>
          <th>Baby</th>
          </tr>
          </thead>

            <tbody>
{this.props.amenities.map((f) =>
  <tr key={f.id}>
    <td>{f.image}</td>
    <td>{f.location_id}</td>
    <td >{f.price}</td>
    <td >{f.rating}</td>
    <td>{f.toilet}</td>
    <td>{f.bath}</td>
    <td>{f.shower}</td>
    <td>{f.baby}</td>
  </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Amenities;
