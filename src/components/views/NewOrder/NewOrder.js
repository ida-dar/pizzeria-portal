import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './NewOrder.scss';

const NewOrder = () => {
  return(
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/waiter`}>Waiter view</Link>
      <h2>New order</h2>
    </div>
  );
};

//NewOrder.propTypes = {};

export default NewOrder;