import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../App.css';
import './../index.css';
import Bookings from './Bookings'
import Amenities from './Amenities'
import Users from './Users'

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/bookings.json';


class BookingForm extends Component {
  constructor() {
    super();
    this.state = { timeIn: '', timeOut: ''};
    this._handleInputTimeIn = this._handleInputTimeIn.bind(this);
    this._handleInputTimeOut = this._handleInputTimeOut.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputTimeIn(event) {
    this.setState({timeIn: event.target.value});
  }

  _handleInputTimeOut(event) {
    this.setState({timeOut: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.timeIn, this.state.timeOut );
    this.setState({timeIn: ''});
    this.setState({timeOut: ''});
  }

  saveFlight(timeIn, timeOut, amount, payment, user_id, amenities_id) {
    axios.post(SERVER_URL, {timeIn: timeIn, timeOut: timeOut, amount: amount, payment: payment, user_id: amenities_id}).then((result) =>{
      this.setState({bookings: [...this.state.bookings, result.data]});
    });
  }


  render() {
    return (
      <div>
      <h1> Make Booking</h1>
      <form onSubmit={ this._handleSubmit }>
         <br/>
        Time from: <input type="time" placeholder="11:00" required onInput={ this._handleInputTimeIn } />
        Time to: <input type="time" placeholder="11:00" required onInput={ this._handleInputTimeOut } />
        <input type="submit" value="Book" />
      </form>
      </div>
    );
  }
}

export default BookingForm;
