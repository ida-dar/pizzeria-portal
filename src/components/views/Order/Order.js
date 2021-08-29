import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Order.scss';

const Order = () => {

  let { id } = useParams();

  return(
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/waiter`}>Waiter view</Link>
      <h2>Order No. {id}</h2>
    </div>
  );
};

//Order.propTypes = {};

export default Order;