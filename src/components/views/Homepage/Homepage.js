import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Homepage = () => {

  const statistics = [
    {
      id: 1,
      name: 'Local orders',
      amount: 100,
    },
    {
      id: 2,
      name: 'Takeout orders',
      amount: 125,
    },
  ];

  const demoContent = {
    bookings: [
      {
        id: 1,
        hour: '12:30',
        table: 1,
        ppl: 2,
      },
      {
        id: 2,
        hour: '14:30',
        table: 2,
        ppl: 3,
      },
      {
        id: 3,
        hour: '13:30',
        table: 4,
        ppl: 4,
      },
    ],
    events: [
      {
        id: 1,
        hour: '16:30',
        table: 1,
        ppl: 4,
      },
      {
        id: 2,
        hour: '19:00',
        table: 2,
        ppl: 2,
      },
      {
        id: 3,
        hour: '15:30',
        table: 4,
        ppl: 4,
      },
    ],
  };

  return(
    <div className={styles.component}>
      <Typography variant="h4">
        Homepage
      </Typography>
      <Paper>
        <List>
          <Typography variant="h6">
            Statistics:
          </Typography>
          <ListItem >
            {statistics.map(item => (
              <ListItemText
                key={item.id}
                primary={`${item.name}:`}
                secondary={item.amount}
              />
            ))}
          </ListItem>
        </List>
        <Typography variant="h6">
          Reservations
        </Typography>
        <Table>
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>No. of people</TableCell>
          </TableHead>
          <TableBody>
            {demoContent.bookings.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.hour}</TableCell>
                <TableCell>{item.table}</TableCell>
                <TableCell>{item.ppl}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <Typography variant="h6">
                Events
              </Typography>
            </TableRow>
            {demoContent.events.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.hour}</TableCell>
                <TableCell>{item.table}</TableCell>
                <TableCell>{item.ppl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

//Homepage.propTypes = {};

export default Homepage;