import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './NewEvent.module.scss';

const NewEvent = () => {
  return(
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
      <h2>New event</h2>
    </div>
  );
};

//NewEvent.propTypes = {};

export default NewEvent;