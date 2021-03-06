import * as React from 'react';
import Navbar from './Navbar'


const SignIn = () => (
  <div>
    <Navbar />
    <div className="container">
      <h1>Sign In</h1>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>  
  </div>
);

export default SignIn;