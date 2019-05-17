import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
//import { Link } from 'react-router-dom';

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/locations.json';

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };

    const fetchLocations = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({locations: results.data});
      });
    };
    fetchLocations();
  }

  render () {

      return (
        <div className="locations">
          <Navbar />
          <h1>All Locations</h1>
          <Gallery locations={ this.state.locations}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="locations">
      <h2>Locations</h2>
        <table className="locationtable">
        <thead>
        <tr>
          <th>Suburb</th>
          <th>Street</th>
          <th>House</th>
          <th>Type Of House</th>
          <th>Description</th>
          <th>Available From</th>
          <th>Available To</th>
          <th>User name</th>
          </tr>
          </thead>

            <tbody>
{this.props.locations.map((f) =>
  <tr key={f.id}>
    <td>{f.suburb}</td>
    <td>{f.street}</td>
    <td >{f.house}</td>
    <td >{f.typeOfHouse}</td>
    <td>{f.description}</td>
    <td>{f.availableFrom}</td>
    <td>{f.availableTo}</td>
    <td>{f.user_id}</td>
  </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Locations;
