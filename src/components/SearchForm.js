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
      <div className="jumbotron">
        <h1 className="display-3"> Search Amenities</h1>
        <form action="/search" className="form-inline">
          <div className="form-group mb-2">
            <label className="sr-only">Suburb:</label>
            <input readonly className="form-control-plaintext" type="search" placeholder="Sydney" onInput={ this._handleInputSuburb }></input>
          </div>
          <div className="form-group mb-2 form-check">
            <label className="sr-only">Toilet</label> 
            <input type="checkbox" className="form-check-input position-static"></input>
          </div>

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
{/* <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
</div>
<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
</form> */}