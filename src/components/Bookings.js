import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
//import { Link } from 'react-router-dom';

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/bookings.json';


class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      bookings: []
    };

    const fetchBookings = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({bookings: results.data});
      });
    };
    fetchBookings();
  }


  render() {

      return (
        <div className="bookings">
          <Navbar />
          <h1>All Bookings</h1>
          <Gallery bookings={ this.state.bookings}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="bookings">
      <h2>Bookings</h2>
        <table className="bookoingtable">
        <thead>
        <tr>
          <th>Time In</th>
          <th>Time Out</th>
          <th>Amount</th>
          <th>Amenity name</th>
          </tr>
          </thead>

            <tbody>
{this.props.bookings.map((f) =>
  <tr key={f.id}>
    <td>{f.timeIn}</td>
    <td>{f.timeOut}</td>
    <td >{f.amount}</td>
    <td >{f.amenities_id}</td>
    </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Bookings;

//just get axios
