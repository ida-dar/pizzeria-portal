import React from 'react';
import { Link, useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './SingleBooking.module.scss';
import Typography from '@material-ui/core/Typography';

const SingleBooking = () => {

  let { id } = useParams();

  return(
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
      <Typography variant="h4">
        Booking No. {id}
      </Typography>
    </div>
  );
};

//SingleBooking.propTypes = {};

export default SingleBooking;