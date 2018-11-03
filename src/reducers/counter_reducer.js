import {
  FETCH_COUNT_BEGIN,
  FETCH_COUNT_FAILURE,
  FETCH_COUNT_SUCCESS,
  SET_COUNT_BEGIN,
  SET_COUNT_SUCCESS,
  SET_COUNT_FAILURE,
} from './constants';
import {AsyncStorage} from 'react-native';
const initialState = {
  count: '-1',
  loading: false,
  error: null,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNT_BEGIN:
      console.log({name: 'FETCH_COUNT_BEGIN', oldState: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COUNT_SUCCESS:
      console.log({
        name: 'FETCH_COUNT_SUCCESS',
        payload: action.payload,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        count: action.payload.count,
      };

    case FETCH_COUNT_FAILURE:
      console.log({
        name: 'FETCH_COUNT_FAILURE',
        answer: action,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_COUNT_BEGIN:
      console.log({name: 'SET_COUNT_BEGIN', oldState: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_COUNT_SUCCESS:
      console.log({
        name: 'SET_COUNT_SUCCESS',
        payload: action.payload,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        count: action.payload.count,
      };

    case SET_COUNT_FAILURE:
      console.log({name: 'SET_COUNT_FAILURE', answer: action, oldState: state});
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
