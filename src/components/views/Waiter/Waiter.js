import React from 'react';
import { Link, useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = () => {

  let { id } = useParams();

  return(
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>Order No. {id}</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Link>
    </div>
  );
};

//Waiter.propTypes = {};

export default Waiter;