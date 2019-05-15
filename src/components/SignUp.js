import * as React from 'react';

const SignUp   = () => (
  <div className="container">
    <h1>Sign Up</h1>
    <form>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" name="fname" className="form-control" placeholder="First name"/>  
      </div>
      <div className="form-group ">
        <label>Last Name</label>
        <input type="text" name="lname" className="form-control" placeholder="Last name"/> 
      </div>
      <div className="form-group ">
        <label>Email</label>
        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/> 
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group ">
        <label>Password</label>
        <input type="password" name="password" className="form-control" id="password" placeholder="Password"/>  
      </div>
      <div className="form-group ">
        <label>Confirm password</label>
        <input type="password" name="password_confirmation" className="form-control" id="password_confirmation" placeholder="Password"/>  
      </div>
      <div className= "form-group ">
        <div >I need to find an amenity!</div>
          <div className="form-check">
            <input name="user" className="form-check-input" type="checkbox" id="user"></input>
            <label className="form-check-label">
              User
            </label>
        </div>
      </div>
      <div className= "form-group ">
        <div >I have a great, clean bathroom available!</div>
          <div className="form-check">
            <input name="owner" className="form-check-input" type="checkbox" id="owner"></input>
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
);

export default SignUp;