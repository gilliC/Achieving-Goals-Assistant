import {
  FETCH_GOALS_BEGIN,
  FETCH_GOALS_FAILURE,
  FETCH_GOALS_SUCCESS,
  SET_GOALS_BEGIN,
  SET_GOALS_SUCCESS,
  SET_GOALS_FAILURE,
  DELETE_GOAL_BEGIN,
  DELETE_GOAL_SUCCESS,
  DELETE_GOAL_FAILURE,
} from './constants';
import {AsyncStorage} from 'react-native';
const initialState = {
  goals: [],
  loading: false,
  error: null,
  isEmpty: true,
};
let goals;
export default function(state = initialState, action) {
  switch (action.type) {
    case DELETE_GOAL_BEGIN:
      console.log({name: 'DELETE_GOAL_BEGIN', answer: action, oldState: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_GOALS_BEGIN:
      console.log({name: 'FETCH_GOALS_BEGIN', oldState: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_GOALS_SUCCESS:
      console.log({
        name: 'FETCH_GOALS_SUCCESS',
        payload: action.payload,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        goals: action.payload.goals,
        isEmpty: action.payload.isEmpty,
      };

    case FETCH_GOALS_FAILURE:
      console.log({
        name: 'FETCH_GOALS_FAILURE',
        answer: action,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_GOALS_BEGIN:
      console.log({name: 'SET_GOALS_BEGIN', oldState: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_GOALS_SUCCESS:
      console.log({
        name: 'SET_GOALS_SUCCESS',
        payload: action.payload,
        oldState: state,
      });
      goals = JSON.parse(action.payload.goals);
      return {
        ...state,
        loading: false,
        goals: goals,
        isEmpty: action.payload.isEmpty,
      };

    case SET_GOALS_FAILURE:
      console.log({name: 'SET_GOALS_FAILURE', answer: action, oldState: state});
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case DELETE_GOAL_SUCCESS:
      console.log({
        name: 'DELETE_GOAL_SUCCESS',
        payload: action.payload,
        oldState: state,
      });
      //recived stringfy goals list without the deleted one
      goals = JSON.parse(action.payload.goals);
      return {
        ...state,
        loading: false,
        goals: goals,
        isEmpty: action.payload.isEmpty,
      };

    case DELETE_GOAL_FAILURE:
      console.log({
        name: 'DELETE_GOAL_FAILURE',
        answer: action,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
