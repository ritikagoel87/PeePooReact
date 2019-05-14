import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/users.json';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };

    const fetchUsers = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({users: results.data});
        setTimeout(fetchUsers, 3000);
      });
    };
    fetchUsers();
  }


  render () {

      return (
        <div className="users">
          <h1>All Users</h1>
          <Gallery users={ this.state.users}/>
        </div>
      );

  }
};

class Gallery extends Component {
  render() {
    return (
      <div className="users">
      <h2>Users</h2>
        <table className="usertable">
        <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Admin</th>
          <th>Owner</th>
          </tr>
          </thead>

            <tbody>
{this.props.users.map((f) =>
  <tr key={f.id}>
    <td>{f.fname}</td>
    <td>{f.lname}</td>
    <td >{f.email}</td>
    <td >{f.admin}</td>
    <td>{f.owner}</td>
  </tr>)}
  </tbody>
</table>
      </div>

    );
  }
}


export default Users;
