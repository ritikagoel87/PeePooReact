import React, {Component} from 'react';
import axios from 'axios';

const PEEPOO_URL = "https://pee-poo-rails.herokuapp.com/users";
// const PEEPOO_URL = "http://localhost:4000/users.json";

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      // users: [],
      fname: '',
      lname: '',
      email: '',
      password:'',
      password_confirmation: '',
      owner: false,
      admin: false  
    };
  }

  onChangeHandlerName = (e) => {
    this.setState({fname: e.target.value});
  }

  onChangeHandlerLName = (e) => {
    this.setState({lname: e.target.value});
  }

  onChangeHandlerEmail = (e) => {
    this.setState({email: e.target.value});
  }

  onChangeHandlerPassword = (e) => {
    this.setState({password: e.target.value});
  }

  onChangeHandlerPasswordC = (e) => {
    this.setState({password_confirmation: e.target.value});
  }

  onChangeHandlerOwner = (e) => {
    e.target.checked === true ? this.setState({owner: true}) : this.setState({owner: false});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(PEEPOO_URL, {
      fname: this.state.fname, 
      lname: this.state.lname, 
      email: this.state.email, 
      password: this.state.password, 
      password_confirmation: this.state.password_confirmation, 
      owner: this.state.owner, 
      admin: this.state.admin
    }).then((data) => {
      console.log('Done');
    })
  }

  render() {
    const {fname, lname, email, password, password_confirmation, owner} = this.state;
    return(
      <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            name="fname" 
            value={fname}
            onChange={this.onChangeHandlerName}
            className="form-control" 
            placeholder="First name"
          />  
        </div>
        <div className="form-group ">
          <label>Last Name</label>
          <input 
            type="text" 
            name="lname" 
            value={lname}
            onChange={this.onChangeHandlerLName}
            className="form-control" 
            placeholder="Last name"
          /> 
        </div>
        <div className="form-group ">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={this.onChangeHandlerEmail}
            className="form-control" 
            id="email" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
          /> 
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group ">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={this.onChangeHandlerPassword}
            className="form-control" 
            id="password" 
            placeholder="Password"
          />  
        </div>
        <div className="form-group ">
          <label>Confirm password</label>
          <input 
            type="password" 
            name="password_confirmation" 
            value={password_confirmation}
            onChange={this.onChangeHandlerPasswordC}
            className="form-control" 
            id="password_confirmation" 
            placeholder="Password"
          />  
        </div>
        <div className= "form-group ">
          <div >I need to find an amenity!</div>
            <div className="form-check">
              <input 
                name="user"
                className="form-check-input" 
                type="checkbox" 
                id="user"
                />
              <label className="form-check-label">
                User
              </label>
          </div>
        </div>
        <div className= "form-group ">
          <div >I have a great, clean bathroom available!</div>
            <div className="form-check">
              <input 
                name="owner"
                onChange={this.onChangeHandlerOwner}
                className="form-check-input" 
                type="checkbox" 
                id="owner"
              />
              <label className="form-check-label">
                Owner
              </label>
            </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Sign Up</button> 
          </div>
        </div>
      </form>
    </div>
    )
  }
} 


export default SignUp;