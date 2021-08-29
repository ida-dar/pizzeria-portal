import React from 'react';
import { Link, useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './SingleEvent.module.scss';

const SingleEvent = () => {

  let { id } = useParams();

  return(
    <div className={styles.component}>
      <h2>Event No. {id}</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
    </div>
  );
};

//SingleEvent.propTypes = {};

export default SingleEvent;