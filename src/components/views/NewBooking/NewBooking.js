import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './NewBooking.module.scss';

const NewBooking = () => {
  return(
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
      <h2>New booking</h2>
    </div>
  );
};

//NewBooking.propTypes = {};

export default NewBooking;