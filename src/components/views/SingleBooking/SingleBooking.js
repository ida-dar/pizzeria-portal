import React from 'react';
import { Link, useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './SingleBooking.module.scss';

const SingleBooking = () => {

  let { id } = useParams();

  return(
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
      <h2>Booking No. {id}</h2>
    </div>
  );
};

//SingleBooking.propTypes = {};

export default SingleBooking;