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
    this.fetchSerchForm( this.state.suburb, this.state.toilet, this.state.bath, this.state.shower, this.state.baby );
  }

  fetchSerchForm(suburb, toilet, bath, shower, baby) {
      axios.get(SERVER_URL, {params: {suburb: suburb, toilet: toilet, bath: bath, shower: shower, baby: baby}}).then((result) =>{
        console.log(result);
      });
    }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-5"> Search Amenities</h1>
          <div>
            <form action="/search" className="form mb-2" onSubmit={ this._handleSubmit }>
              <div className="form">
                <label>Suburb</label>
                <input className="form-control" type="search" placeholder="Sydney" onInput={ this._handleInputSuburb }></input>
              </div>
              <div className="form-check">
                <input type="checkbox" onInput={ this._handleInputToilet}></input>
                <label>Toilet</label>
              </div>
              <div className="form-check">
                <input type="checkbox"  onInput={ this._handleInputBath}></input>
                <label>Bath</label>
              </div>
              <div className="form-check">
                <input  type="checkbox"  onInput={ this._handleInputShower}></input>
                <label>Shower</label>
              </div>
              <div className="form-check ">
                <input type="checkbox" onInput={ this._handleInputBaby}></input>
                <label>Baby</label>
              </div>
              <br/>
              <div className="col-sm-10">
                <button type="submit" value="Search" className="btn btn-info">Search</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default SearchForm;
