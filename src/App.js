import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

export const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/tables/booking',
    component: Booking,
  },
  {
    path: '/tables/booking/:id',
    component: SingleBooking,
  },
  {
    path: '/tables/bookings/new',
    component: NewBooking,
  },
  {
    path: '/tables/events',
    component: Events,
  },
  {
    path: '/tables/event/:id',
    component: SingleEvent,
  },
  {
    path: '/tables/events/new',
    component: NewEvent,
  },
  {
    path: '/waiter',
    component: Waiter,
  },
  {
    path: '/waiter/order/:id',
    component: Order,
  },
  {
    path: '/tables/order/new',
    component: NewOrder,
  },
  {
    path: '/kitchen',
    component: Kitchen,
  },
];

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              {routes.map(route => (
                <Route key={route.path} exact path={`${process.env.PUBLIC_URL}${route.path}`} component={route.component} />
              ))}
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
