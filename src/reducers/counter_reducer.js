import {
  INCREASE_COUNTER,
  FETCH_DATA_BEGIN,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  SET_DATA_BEGIN,
  SET_DATA_SUCCESS,
  SET_DATA_FAILURE,
  increaingfunc,
} from './constants';
import {AsyncStorage} from 'react-native';
const initialState = {
  count: '-1',
  loading: false,
  error: null,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER: {
      state.count += 1;
      increaingfunc(state.count);
      return state;
    }
    case FETCH_DATA_BEGIN:
      console.log({name: 'begin', value: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      console.log({name: 'success', payload: action.payload, value: state});
      return {
        ...state,
        loading: false,
        count: action.payload.count,
      };

    case FETCH_DATA_FAILURE:
      console.log({name: 'failure', answer: action, value: state});
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_DATA_BEGIN:
      console.log({name: 'begin', value: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_DATA_SUCCESS:
      console.log({name: 'successSET', payload: action.payload, value: state});
      return {
        ...state,
        loading: false,
        count: action.payload.count,
      };

    case SET_DATA_FAILURE:
      console.log({name: 'failure', answer: action, value: state});
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
