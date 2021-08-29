import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = () => {

  return(
    <div className={styles.component}>
      <h2>Events</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Event No.</Link>
    </div>
  );
};

//Events.propTypes = {};

export default Events;