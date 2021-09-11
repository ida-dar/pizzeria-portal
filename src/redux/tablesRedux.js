import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateTable = payload => ({ payload, type: UPDATE_TABLE });

/* thunk creators */
export const fetchFromAPI = () => { // returns a thunk i.e. a function. Thunk takes 2 args.
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios // instead of 'fetch', initialization with API
      .get(`${api.url}/api/${api.tables}`)
      .then(res => { // API's response
        dispatch(fetchSuccess(res.data)); // in case of error '.catch method' is executed instead of '.then'
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const sendUpdate = (id, status) => {

  return(dispatch, getState) => {
    // console.log(id, status);

    Axios
      .patch(`${api.url}/api/${api.tables}/${id}`, {status})
      .then(res => {
        dispatch(updateTable(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  // console.log(action.payload, statePart);
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      // console.log(action.payload, statePart);
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_TABLE: {
      // console.log(action.payload.id, action.payload.status, statePart, statePart.data);
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(table => {
          if(action.payload.id === table.id){
            return {
              ...table,
              status: action.payload.status,
            };
          } else {
            return table;
          }
        }),
      };
    }
    default:
      return statePart;
  }
}