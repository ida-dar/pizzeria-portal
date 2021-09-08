import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Kitchen = () => {

  const demoContent = [
    {
      id: 1,
      name: 'Zia Giulia\'s Breakfast',
      table: 3,
      amount: 1,
      params: {
        coffee: {
          label: 'Coffee type',
          options:{
            latte: 'Latte',
          },
        },
      },
      starters: [
        'bread',
      ],
    },
    {
      id: 3,
      name: 'Nonna Alba\'s Pizza',
      table: 3,
      amount: 2,
      params: {
        sauce: {
          label: 'Sauce',
          options: {
            tomato: 'Tomato',
          },
        },
        toppings: {
          label: 'Toppings',
          options: {
            olives: 'Olives',
            redPeppers: 'Red peppers',
            greenPeppers: 'Green peppers',
            mushrooms: 'Mushrooms',
            basil: 'Fresh basil',
          },
        },
        crust: {
          label: 'pizza crust',
          options: {
            thin: 'thin',
          },
        },
      },
    },
    {
      id: 2,
      name: 'Nonno Alberto\'s Salad',
      amount: 1,
      params: {
        ingredients: {
          label: 'Ingredients',
          options: {
            cucumber: 'Cucumber',
            tomatoes: 'Tomatoes',
            olives: 'Olives',
            herbs: 'Fresh herbs',
          },
        },
      },
      starters: [],
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const sortedContent = demoContent.sort(function (a, b) {
    return (b.id - a.id);
  });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return(
    <div className={styles.component}>
      <Typography variant="h4">
        Kitchen
      </Typography>
      <List component="nav" aria-label="secondary mailbox folders">
        {sortedContent.map(order => (
          <div key={order.id}>
            <Divider />
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Typography variant="h6">
                {order.table ? `Table ${order.table}` : `Order ${order.id}`}
              </Typography>
              <ListItem>
                <ListItemText
                  primary={order.name}
                  secondary={`Amount: ${order.amount}`}
                />
              </ListItem>
              <ListItem>
                {Object.values(order.params).map((obj, index) => {
                  console.log(obj);
                  return(
                    <ListItemText key={index}
                      primary={`${obj.label}:`}
                      secondary={Object.values(obj.options).map((item, index) => (
                        <span key={index}>{item}, </span>
                      ))}
                    >
                    </ListItemText>
                  );
                })}
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={(order.starters && order.starters.length > 0) ? `Starters: ${order.starters}` : ''}
                />
              </ListItem>
              <FormControl component="fieldset">
                <FormLabel component="legend">ORDER STATUS</FormLabel>
                <FormGroup row>
                  <Typography component="div">
                    <Grid component="label" container alignItems="center" spacing={2}>
                      <Grid item>In progress</Grid>
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Switch
                              onChange={handleChange}
                              name="checkedB"
                              color="primary"
                            />
                          }
                        />
                      </Grid>
                      <Grid item>Done</Grid>
                    </Grid>
                  </Typography>
                </FormGroup>
              </FormControl>
            </Grid>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

//Kitchen.propTypes = {};

export default Kitchen;