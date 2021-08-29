import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';

import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import SingleBooking from './components/views/SingleBooking/SingleBooking';
import NewBooking from './components/views/NewBooking/NewBooking';
import Events from './components/views/Events/Events';
import SingleEvent from './components/views/SingleEvent/SingleEvent';
import NewEvent from './components/views/NewEvent/NewEvent';

import Waiter from './components/views/Waiter/Waiter';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />

          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={SingleBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events'} component={Events} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={SingleEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />

          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />

          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
