import React, { Component } from 'react';
import './../App.css';
import './../index.css';
import axios from 'axios';

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/search.json';


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
    if (event.target.checked === true) {
      this.setState({toilet: 1});
    }
  }

  _handleInputBath(event) {
    if (event.target.checked === true) {
      this.setState({bath: 1});
    }
  }

  _handleInputShower(event) {
    if (event.target.checked === true) {
      this.setState({shower: 1});
    }
  }

  _handleInputBaby(event) {
    if (event.target.checked === true) {
      this.setState({baby: 1});
    }
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.toilet);
    this.fetchSerchForm( this.state.suburb, this.state.toilet, this.state.bath, this.state.shower, this.state.baby );
  }

  fetchSerchForm(suburb, toilet, bath, shower, baby) {
      //console.log(flightnumber, flightdate, origin_code, destination_code, planename, seats);
      axios.get(SERVER_URL, {params: {suburb: suburb, toilet: toilet, bath: bath, shower: shower, baby: baby}}).then((result) =>{
        // this.setState({suburb: result.data});
        console.log(result);
      });
    }

  render() {
    return (
      <div>
      <h1> Search Amenities</h1>
      <form action="/search">
         <br/>
        Suburb: <input type="search" placeholder="Sydney" required onInput={ this._handleInputSuburb } />
        Toilet: <input type="checkbox" onInput={ this._handleInputToilet } />
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
