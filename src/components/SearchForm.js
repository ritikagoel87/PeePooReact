import React, { Component } from 'react';
import './../App.css';
import './../index.css';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/home.json';


class SearchForm extends Component {
  constructor() {
    super();
    this.state = { suburb: '', toilet: 0, bath: 0, shower: 0, baby: 0 };
    this._handleInputSuburb = this._handleInputSuburb.bind(this);
    this._handleInputToilet = this._handleInputToilet.bind(this);
    this._handleInputBath = this._handleInputBath.bind(this);
    this._handleInputShower = this._handleInputShower.bind(this);
    this._handleInputBaby = this._handleInputBaby.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputSuburb(event) {
    this.setState({suburb: event.target.value});
  }

  _handleInputToilet(event) {
    this.setState({toilet: event.target.value});
  }

  _handleInputBath(event) {
    this.setState({bath: event.target.value});
  }

  _handleInputShower(event) {
    this.setState({shower: event.target.value});
  }

  _handleInputBaby(event) {
    this.setState({baby: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.suburb, this.state.toilet, this.state.bath, this.state.shower, this.state.baby );
    this.setState({suburb: ''});
    this.setState({toilet: 0});
    this.setState({bath: 0});
    this.setState({shower: 0});
    this.setState({baby: 0});
  }

  fetchSerchForm(suburb, toilet, bath, shower, baby) {
      //console.log(flightnumber, flightdate, origin_code, destination_code, planename, seats);
      axios.get(SERVER_URL, {suburb: suburb, toilet: toilet, bath: bath, shower: shower, baby: baby}).then((result) =>{
        this.setState({suburb: result.data});
      });
    }

  render() {
    return (
      <div>
      <h1> Search Amenities</h1>
      <form onSubmit={ this._handleSubmit }>
         <br/>
        Suburb: <input type="search" placeholder="Sydney" required onInput={ this._handleInputSuburb } />
        Toilet: <input type="checkbox" required onInput={ this._handleInputToilet } />
        Bath: <input type="checkbox" onInput={ this._handleInputBath } />
        Shower: <input type="checkbox" onInput={ this._handleInputShower } />
        Baby: <input type="checkbox" onInput={ this._handleInputBaby } />
        <input type="submit" value="Search" />
      </form>
      </div>
    );
  }
}

export default SearchForm;
