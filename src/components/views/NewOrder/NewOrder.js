import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';

const NewOrder = () => {

  const labels = ['Name', 'Options', 'Base price', 'Amount', 'Final price', 'Add to order'];
  const orderLabels = ['Name', 'Options', 'Starters', 'Base price', 'Amount', 'Final price'];

  const products = [
    {
      id: 'cake',
      class: 'small',
      name: 'Zio Stefano\'s Doughnut',
      price: 9,
    },
    {
      id: 'breakfast',
      class: 'small',
      name: 'Zia Giulia\'s Breakfast',
      price: 9,
      params: [
        {
          label: 'Coffee type',
          type: 'radios',
          options: [
            {
              label: 'Latte',
              price: 1,
              default: true,
            },
            {
              label: 'Cappuccino',
              price: 1,
            },
            {
              label: 'Espresso',
              price: 1,
            },
            {
              label: 'Macchiato ',
              price: 1,
            },
          ],
        },
      ],
    },
    {
      id: 'pizza',
      name: 'Nonna Alba\'s Pizza',
      price: 20,
      params: [
        {
          label: 'Sauce',
          type: 'radios',
          options: [
            {
              label: 'Tomato',
              price: 0,
              default: true,
            },
            {
              label: 'Sour cream',
              price: 2,
            },
          ],
        },
        {
          label: 'Toppings',
          type: 'checkboxes',
          options: [
            {
              label: 'Olives',
              price: 2,
              default: true,
            },
            {
              label: 'Red peppers',
              price: 2,
              default: true,
            },
            {
              label: 'Green peppers',
              price: 2,
              default: true,
            },
            {
              label: 'Mushrooms',
              price: 2,
              default: true,
            },
            {
              label: 'Fresh basil',
              price: 2,
              default: true,
            },
            {
              label: 'Salami',
              price: 3,
            },
          ],
        },
        {
          label: 'pizza crust',
          type: 'select',
          options: [
            {
              label: 'standard',
              price: 0,
              default: true,
            },
            {
              label: 'thin',
              price: 2,
            },
            {
              label: 'thick',
              price: 2,
            },
            {
              label: 'cheese in edges',
              price: 5,
            },
            {
              label: 'wholewheat',
              price: 3,
            },
            {
              label: 'with extra gluten',
              price: 0,
            },
          ],
        },
      ],
    },
    {
      id: 'salad',
      name: 'Nonno Alberto\'s Salad',
      price: 9,
      params: [
        {
          label: 'Ingredients',
          type: 'checkboxes',
          options: [
            {
              label: 'Cucumber',
              price: 1,
              default: true,
            },
            {
              label: 'Tomatoes',
              price: 1,
              default: true,
            },
            {
              label: 'Olives',
              price: 1,
              default: true,
            },
            {
              label: 'Feta cheese',
              price: 1,
            },
            {
              label: 'Cheese',
              price: 1,
            },
            {
              label: 'Fresh herbs',
              price: 1,
              default: true,
            },
            {
              label: 'Black pepper',
              price: 1,
            },
          ],
        },
      ],
    },
  ];

  const demoContent = [
    {
      id: 'breakfast',
      name: 'Zia Giulia\'s Breakfast',
      price: 9,
      amount: 1,
      params: [
        {
          label: 'Coffee type',
          price: 1,
          options: [
            'Latte',
          ],
        },
      ],
      starters: [
        'bread',
      ],
    },
    {
      id: 'pizza',
      name: 'Nonna Alba\'s Pizza',
      price: 20,
      amount: 2,
      params: [
        {
          label: 'Sauce',
          options: [
            'Tomato',
          ],
        },
        {
          label: 'Toppings',
          options: [
            'Olives',
            'Red peppers',
            'Green peppers',
            'Mushrooms',
            'Fresh basil',
          ],
        },
        {
          label: 'pizza crust',
          options: [
            'thin',
          ],
        },
      ],
      starters: [
        'bread',
        'lemon water',
      ],
    },
    {
      id: 'salad',
      name: 'Nonno Alberto\'s Salad',
      price: 9,
      amount: 1,
      params: [
        {
          label: 'Ingredients',
          options: [
            'Cucumber',
            'Tomatoes',
            'Olives',
            'Fresh herbs',
          ],
        },
      ],
      starters: [],
    },
  ];

  const [values, setValues] = React.useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const sumArray = [];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  for(let item of demoContent){
    let sum = 0;
    sum += item.price * item.amount;
    sumArray.push(sum);
  }

  return(
    <div className={styles.component}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter`} variant="contained" color="secondary" size="large">Return to waiter view</Button>
      </Grid>
      <Typography variant="h4">
        New order
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <FormControl className={styles.formControl}>
            <InputLabel id="demo-simple-select-label" >Table No.</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={1}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              {labels.map((label, index) => (
                <TableCell key={index}>{label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.params && item.params.map(param => (
                    <>
                      <h4 key={param.label}>{param.label}:</h4>
                      {param.options.map(option => (
                        <FormControlLabel
                          key={option.label}
                          control={
                            <Checkbox
                              name={option.label}
                              color="primary"
                            />
                          }
                          label={`${option.label} ($${option.price})`}
                        />
                      ))}
                    </>
                  ))}
                </TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <FormControl className={styles.formControl}>
                    <Input
                      id="standard-adornment-amount"
                      defaultValue={1}
                      onChange={handleChange('amount')}
                    />
                  </FormControl>
                </TableCell>
                <TableCell>${item.price * values}</TableCell>
                <TableCell>
                  <Button component={Link} exact to={`${process.env.PUBLIC_URL}/`} variant="outlined" color="primary" size="medium">Add</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="h4">
          Order details
        </Typography>
      </Grid>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              {orderLabels.map((label, index) => (
                <TableCell key={index}>{label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.params && item.params.map(param => (
                    <>
                      <h4 key={param.label}>{param.label}:</h4>
                      {param.options.map((option, index) => (
                        <span key={index}>{option}, </span>
                      ))}
                    </>
                  ))}
                </TableCell>
                <TableCell>
                  {item.starters && item.starters.map(item => (
                    <span key={item}>{item}, </span>
                  ))}
                </TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>${item.price * item.amount}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <h3>Final price for order:</h3>
              </TableCell>
              <TableCell>
                ${sumArray.reduce(reducer)}
              </TableCell>
              <TableCell>
                <Button component={Link} exact to={`${process.env.PUBLIC_URL}/`} variant="outlined" color="primary" size="medium">Process order</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </div>
  );
};

//NewOrder.propTypes = {};

export default NewOrder;