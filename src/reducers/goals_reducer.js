import {
  FETCH_GOALS_BEGIN,
  FETCH_GOALS_FAILURE,
  FETCH_GOALS_SUCCESS,
  SET_GOALS_BEGIN,
  SET_GOALS_SUCCESS,
  SET_GOALS_FAILURE,
} from './constants';
import {AsyncStorage} from 'react-native';
const initialState = {
  goals: ['No Goals Were Set'],
  loading: false,
  error: null,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GOALS_BEGIN:
      console.log({name: 'begin', value: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_GOALS_SUCCESS:
      console.log({name: 'success', payload: action.payload, value: state});
      return {
        ...state,
        loading: false,
        goals: action.payload.goals,
      };

    case FETCH_GOALS_FAILURE:
      console.log({name: 'failure', answer: action, value: state});
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_GOALS_BEGIN:
      console.log({name: 'begin', value: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_GOALS_SUCCESS:
      console.log({name: 'successSET', payload: action.payload, value: state});
      return {
        ...state,
        loading: false,
        goals: action.payload.goals,
      };

    case SET_GOALS_FAILURE:
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
