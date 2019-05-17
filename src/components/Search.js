import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

// const SERVER_URL = 'http://localhost:3000/search.json';
const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/search.json';
const LOCATION_URL = 'https://pee-poo-rails.herokuapp.com/locations/';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      suburb: '',
      toilet: 0,
      bath: 0,
      shower: 0,
      baby: 0
    };
    this.fetchSerchForm = this.fetchSerchForm.bind(this);
  }

  fetchSerchForm(suburb, toilet, bath, shower, baby) {
      this.setState({
        results: [],
        suburb: suburb,
        toilet: toilet,
        bath: bath,
        shower: shower,
        baby: baby
      });

      let resultsArray = [];
      axios.get(SERVER_URL, {params: {toilet: toilet, bath: bath, shower: shower, baby: baby, suburb: suburb}}).then((result) =>{
        result.data.map( (r) => {
          let resultObject = {amenity: r};
          let location = LOCATION_URL + r.location_id + '.json';
          axios.get(location).then( (res) => {
            console.log(res.data);
            resultObject.location = res.data;
          });
          resultsArray.push(resultObject);
        });
        this.setState({results: resultsArray});
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

class SearchResults extends Component {
  render() {
    console.log(this.props.results);
    return(
      <div className="container">
        <div className="row">
          <div className="col-md">
              {this.props.results.map( (r) =>
                <div key={r.amenity.id} className="card">
                  <img clasName="card-img-top" src={r.amenity.image} />
                  <div className="card-body">
                    <h5 classNamr="card-title">Rating: {r.amenity.rating}</h5>
                    <p className="card-text">Price: ${r.amenity.price} per 10mins</p>
                    <p className="card-text">Type Of House: {r.amenity.typeOfHouse}</p>
                    <a className="btn btn-info" href={"#/search/" + r.amenity.id}>More Details >>></a>
                  </div>
                </div>
              )}
          </div>  
        </div>
      </div>
      
    )
  }
}

export default Search;
