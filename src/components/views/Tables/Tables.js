import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

import Typography from '@material-ui/core/Typography';
import { Paper,  Button, Grid, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const renderTables = item => {
  if(item === 'FREE'){
    return(
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} color="primary" size="small">
        NEW BOOKING
      </Button>
    );
  } else if(item === 'EVENT'){
    return(
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`} variant="outlined" color="secondary" size="small">
        EVENT
      </Button>
    );
  } else {
    return(
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${item}`} variant="outlined" color="primary" size="small">
        {item}
      </Button>
    );
  }
};

const Tables = () => {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const tableNumbers = [1, 2, 3, 4];

  // eslint-disable-next-line no-unused-vars
  const demoContent = [
    {hour: '12:00', table1: 1, table2: 3, table3: 'FREE', table4: 'FREE'},
    {hour: '12:30', table1: 3, table2: 'FREE', table3: 'EVENT', table4: 'FREE'},
    {hour: '13:00', table1: 'EVENT', table2: 2, table3: 2, table4: 3},
    {hour: '13:30', table1: 'FREE', table2: 1, table3: 'FREE', table4: 'EVENT'},
    {hour: '14:00', table1: 3, table2: 'FREE', table3: 2, table4: 'FREE'},
    {hour: '14:30', table1: 2, table2: 3, table3: 'FREE', table4: 4},
    {hour: '15:00', table1: 'FREE', table2: 4, table3: 3, table4: 'FREE'},
    {hour: '15:30', table1: 4, table2: 3, table3: 'EVENT', table4: 1},
  ];

  return(
    <div className={styles.component}>
      <Typography variant="h4">
        Tables
      </Typography>
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
                <TableCell>Hour</TableCell>
                {tableNumbers.map((table, index) => (
                  <TableCell key={index}>Table {table} (No. of ppl)</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.hour}</TableCell>
                  <TableCell>
                    {renderTables(item.table1)}
                  </TableCell>
                  <TableCell>
                    {renderTables(item.table2)}
                  </TableCell>
                  <TableCell>
                    {renderTables(item.table3)}
                  </TableCell>
                  <TableCell>
                    {renderTables(item.table4)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </div>
  );
};

//Tables.propTypes = {};

export default Tables;