import React from 'react';
import { Link, useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './SingleBooking.module.scss';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';

const SingleBooking = () => {

  const [setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  let { id } = useParams();

  const demoContent = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    tel: '123-456-789',
    date: '2021-09-15T15:30:00',
    duration: 2,
    ppl: 4,
    starters: [
      'bread',
    ],
  };

  return(
    <div className={styles.component}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables`} variant="contained" color="secondary" size="large">Return to tables view</Button>
      </Grid>
      <Typography variant="h4">
        Booking No. {id}
      </Typography>
      <Paper >
        <form autoComplete="off">
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="h6">
              Contact data
            </Typography>
            <Grid item>
              <TextField id="outlined-basic" label="Name" defaultValue={demoContent.name} variant="outlined" />
            </Grid>
            <Grid item>
              <TextField id="outlined-basic" label="Phone Number" defaultValue={demoContent.tel} variant="outlined" />
            </Grid>
            <Grid item>
              <TextField id="outlined-basic" label="Email (optional)" defaultValue={demoContent.email} variant="outlined" />
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="h6">
              Date
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date"
                value={demoContent.date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time"
                value={demoContent.date}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>
            <Typography variant="h6">
              Details
            </Typography>
            <Grid item>
              <TextField variant="outlined" id="outlined-basic" type="number" label="People" defaultValue={demoContent.ppl}/>
            </Grid>
            <Grid item>
              <TextField variant="outlined" id="outlined-basic" type="number" label="Hours" defaultValue={demoContent.duration}  />
            </Grid>
            <Typography variant="h6">
              Starters
            </Typography>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name="lemonWater"
                    color="primary"
                  />
                }
                label="Lemon water"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    name="bread"
                    color="primary"
                  />
                }
                label="Bread"
              />
            </Grid>
            <Button component={Link} exact to={`${process.env.PUBLIC_URL}/`} variant="contained" color="primary" type="submit">Submit</Button>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

//SingleBooking.propTypes = {};

export default SingleBooking;