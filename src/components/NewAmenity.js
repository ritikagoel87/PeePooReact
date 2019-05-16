import React, { Component } from 'react';
import './../App.css';
import './../index.css';
import axios from 'axios';

const SERVER_URL = 'https://pee-poo-rails.herokuapp.com/amenities.json';


class NewAmenity extends Component {
  constructor() {
    super();
    this.state = { toilet: 0, bath: 0, shower: 0, baby: 0, suburb: '', street: '', house: '', typeOfHouse: '', image: '', price:'', availableFrom: '', availableTo: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputToilet = this._handleInputToilet.bind(this);
    this._handleInputBath = this._handleInputBath.bind(this);
    this._handleInputShower = this._handleInputShower.bind(this);
    this._handleInputBaby = this._handleInputBaby.bind(this);
    this._handleInputSuburb = this._handleInputSuburb.bind(this);
    this._handleInputStreet = this._handleInputStreet.bind(this);
    this._handleInputHouse = this._handleInputHouse.bind(this);
    this._handleInputTypeOfHouse = this._handleInputTypeOfHouse.bind(this);
    this._handleInputImage = this._handleInputImage.bind(this);
    this._handleInputPrice = this._handleInputPrice.bind(this);
    this._handleInputAvailableFrom = this._handleInputAvailableFrom.bind(this);
    this._handleInputAvailableTo = this._handleInputAvailableTo.bind(this);
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

  _handleInputSuburb(event) {
    this.setState({suburb: event.target.value});
  }

  _handleInputStreet(event) {
    this.setState({street: event.target.value});
  }

  _handleInputHouse(event) {
    this.setState({house: event.target.value});
  }

  _handleInputTypeOfHouse(event) {
    this.setState({tipeOfHouse: event.target.value});
  }

  _handleInputImage(event) {
    this.setState({image: event.target.value});
  }

  _handleInputPrice(event) {
    this.setState({price: event.target.value});
  }

  _handleInputAvailableFrom(event) {
    this.setState({availableFrom: event.target.value});
  }

  _handleInputAvailableTo(event) {
    this.setState({availableTo: event.target.value});
  }


  _handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.toilet);
    this.saveNewAmenity(  this.state.toilet, this.state.bath, this.state.shower, this.state.baby, this.state.suburb, this.state.street, this.state.house, this.state.typeOfHouse, this.state.image, this.state.price, this.state.availableFrom, this.state.availableTo );
    this.setState({toilet: 0});
    this.setState({bath: 0});
    this.setState({shower: 0});
    this.setState({baby: 0});
    this.setState({suburb: ''});
    this.setState({street: ''});
    this.setState({house: ''});
    this.setState({typeOfHouse: ''});
    this.setState({image: ''});
    this.setState({price: ''});
    this.setState({availableFrom: ''});
    this.setState({availableTo: ''});
  }

  saveNewAmenity( toilet, bath, shower, baby, suburb, street, house, typeOfHouse, image, price, availableFrom, availableTo ) {
      console.log(toilet, bath, shower, baby, suburb, street, house, typeOfHouse, image, price, availableFrom, availableTo);
      axios.post(SERVER_URL, { toilet: toilet, bath: bath, shower: shower, baby: baby, suburb: suburb, street: street, house: house, typeOfHouse: typeOfHouse, image: image, price: price, availableFrom: availableFrom, availableTo: availableTo }).then((result) =>{
      this.setState({amenities: [...this.state.amenities, result.data]});
    });
  }

  render() {
    return (
      <div>
      <h1> Make your amenity avaliable here!</h1>
      <form onSubmit={ this._handleSubmit }>
         <br/>
        Toilet: <input type="checkbox" required onChange={ this._handleInputToilet } />
        Bath: <input type="checkbox" onChange={ this._handleInputBath } />
        Shower: <input type="checkbox" onChange={ this._handleInputShower } />
        Baby: <input type="checkbox" onChange={ this._handleInputBaby } />
        Suburb: <input type="text" placeholder="Sydney" required onChange={ this._handleInputSuburb } />
        Street: <input type="text" placeholder="" required onChange={ this._handleInputStreet } />
        House: <input type="text" placeholder="" required onChange={ this._handleInputHouse } />
        Type Of House: <input type="text" placeholder="" required onChange={ this._handleInputTypeOfHouse } />
        Image: <input type="text" placeholder="" required onChange={ this._handleInputImage } />
        Price: <input type="float" placeholder="" required onChange={ this._handleInputPrice } />
        Available From: <input type="time" placeholder="" required onChange={ this._handleInputAvailableFrom } />
        Available To: <input type="time" placeholder="" required onChange={ this._handleInputAvailableTo } />
        <input type="submit" value="Save Amenity" />
      </form>
      </div>
    );
  }
}

export default NewAmenity;
