import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/search.json';

class Search extends Component {
  constructor() {
    super();
    this.state = { results: [] };
    this.fetchSerchForm = this.fetchSerchForm.bind(this);
  }

  fetchSerchForm(suburb, toilet, bath, shower, baby) {
      this.setState({results: []});
      axios.get(SERVER_URL, {suburb: suburb, toilet: toilet, bath: bath, shower: shower, baby: baby}).then((result) =>{
        this.setState({results: result.data});
      });
    }

  render() {
    return (
      <div>
      <Navbar />
        <SearchForm onSubmit={ this.fetchSerchForm } />
        <SearchResults results= { this.state.results } />
      </div>
    );
  }
}

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
    event.target.checked === true ? this.setState({toilet: 1}) : this.setState({toilet: 0});
  }

  _handleInputBath(event) {
    event.target.checked === true ? this.setState({bath: 1}) : this.setState({bath: 0});
  }

  _handleInputShower(event) {
    event.target.checked === true ? this.setState({shower: 1}) : this.setState({shower: 0});
  }

  _handleInputBaby(event) {
    event.target.checked === true ? this.setState({baby: 1}) : this.setState({baby: 0});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.suburb, this.state.toilet, this.state.bath, this.state.shower, this.state.baby );
  }

  render() {
    return (
      <div>
      <h1> Search Amenities</h1>
      <form onSubmit={ this._handleSubmit }>
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

class SearchResults extends Component {
  render() {
    return(
      <div className="container">
        {this.props.results.map( (r) =>
          <div key={r.id}>
          </div>
       )}
      </div>
    )
  }
}

export default Search;
