import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import DashboardAdmin from './components/DashboardAdmin';
import Search from './components/Search';
import SearchAmenity from './components/SearchAmenity';
import BookingPayment from './components/BookingPayment';
import BookingConfirmation from './components/BookingConfirmation';
import Bookings from './components/Bookings';
import NewAmenity from './components/NewAmenity';
import Users from './components/Users';
import Payments from './components/Payments';
import Locations from './components/Locations';
import Amenities from './components/Amenities';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/dashboard" component={ Dashboard } />
      <Route exact path="/dashboard_admin" component={ DashboardAdmin } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/search/:id" component={ SearchAmenity } />
      <Route exact path="/booking/:id" component={ BookingPayment } />
      <Route exact path="/booking/:id/confirmation" component={ BookingConfirmation } />
      <Route exact path="/bookings" component={ Bookings } />
      <Route exact path="/new_amentiy" component={ NewAmenity } />
      <Route exact path="/users" component={ Users } />
      <Route exact path="/payments" component={ Payments } />
      <Route exact path="/locations" component={ Locations } />
      <Route exact path="/amenities" component={ Amenities } />
    </div>
  </Router>
);

export default Routes;
