import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Amenities from './Amenities'
import Users from './Users'

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/bookings.json';
// const SERVER_URL = 'http://localhost:3000/bookings.json';


class BookingForm extends Component {
  constructor() {
    super();
    this.state = { timeIn: '', timeOut: '', duration: 0, user_id: 1};
    this._handleInputTimeIn = this._handleInputTimeIn.bind(this);
    this._handleInputDuration = this._handleInputDuration.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputTimeIn(event) {
    this.setState({timeIn: event.target.value});
  }

  _handleInputDuration(event) {
    this.setState({duration: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    let amount = Math.floor(this.state.duration / 10) * this.props.price;
    let timeOut = this.addMinutes(this.state.timeIn, this.state.duration);
    // console.log(timeOut);

    let location = SERVER_URL + this.props.amenity + ".json";
    axios.post(SERVER_URL, {timeIn: this.state.timeIn, timeOut: timeOut, amount: amount, payment: false, user_id: this.state.user_id, amenities_id: this.props.amenity}).then((result) =>{
      this.props.history.push('/booking/' + result.data.id + '/confirmation');
    });

    this.setState({timeIn: ''});
    this.setState({timeOut: ''});
  }

  addMinutes(time, minsToAdd) {
    function D(J){ return (J<10? '0':'') + J;};
    var piece = time.split(':');
    var mins = piece[0]*60 + +piece[1] + +minsToAdd;

    return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);
  }




  render() {
    return (
      <div>
      <h1> Make Booking</h1>
      <form onSubmit={ this._handleSubmit }>
         <br/>
        Starting Time: <input type="time" placeholder="11:00" required onInput={ this._handleInputTimeIn } />
        Duration(in minutes): <input type="number" placeholder="10" required onInput={ this._handleInputDuration } />
        Amount: <p></p>
        <input type="submit" value="Book" />
      </form>
      </div>
    );
  }
}

export default BookingForm;
