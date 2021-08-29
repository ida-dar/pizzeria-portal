import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const Tables = () => {
  return(
    <div className={styles.component}>
      <h2>Tables</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
    </div>
  );
};

//Tables.propTypes = {};

export default Tables;