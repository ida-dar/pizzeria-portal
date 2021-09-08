import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

import { Paper,  Button, Grid, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Tables = () => {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const tableNumbers = [1, 2, 3, 4];

  // eslint-disable-next-line no-unused-vars
  const demoContent = {

    reservations: [
      {
        id: 1,
        date: '2021-05-20',
        hour: '16:00',
        table: 1,
        duration: 3,
        ppl: 4,
        starters: [
          'water',
        ],
      },
      {
        date: '2021-07-26',
        hour: '12:00',
        duration: 1,
        ppl: 1,
        starters: [],
        phone: '',
        address: '',
        id: 2,
      },
      {
        date: '2021-07-26',
        hour: '12:00',
        duration: 1,
        ppl: 1,
        starters: [],
        phone: '',
        address: '',
        id: 3,
      },
      {
        date: '2021-07-26',
        hour: '12:00',
        duration: 1,
        ppl: 1,
        starters: [],
        phone: '',
        address: '',
        id: 4,
      },
    ],
    events: [
      {
        id: 1,
        date: '2021-05-20',
        hour: '12:30',
        table: 1,
        repeat: false,
        duration: 4,
        ppl: 3,
        starters: [],
      },
      {
        id: 2,
        date: '2021-05-19',
        hour: '16:00',
        table: 3,
        repeat: 'daily',
        duration: 2,
        ppl: 3,
        starters: [
          'bread',
          'lemonWater',
        ],
      },
      {
        id: 3,
        date: '2021-05-19',
        hour: '12:00',
        table: 3,
        repeat: 'daily',
        duration: 2,
        ppl: 3,
        starters: [
          'bread',
          'lemonWater',
        ],
      },
      {
        id: 4,
        date: '2021-05-19',
        hour: '13:00',
        table: 2,
        repeat: 'daily',
        duration: 4,
        ppl: 3,
        starters: [],
      },
      {
        id: 5,
        date: '2021-05-19',
        hour: '18:00',
        table: 2,
        repeat: 'daily',
        duration: 2,
        ppl: 3,
        starters: [
          'lemonWater',
        ],
      },
    ],
  };

  return(
    <div className={styles.component}>
      <h2>Tables</h2>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking`} variant="contained" color="primary" size="large">Booking</Button>
        </Grid>
        <Grid item>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events`} variant="contained" color="primary" size="large">Events</Button>
        </Grid>
      </Grid>
      <Grid className={styles.component}>
        <Paper>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Table>
            <TableHead>
              <TableRow>
                {tableNumbers.map((table, index) => (
                  <TableCell key={index}>Table No. {table}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </div>
  );
};

//Tables.propTypes = {};

export default Tables;