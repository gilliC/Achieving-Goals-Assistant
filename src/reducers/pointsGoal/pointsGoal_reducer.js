import {
  FETCH_POINTSGOAL_BEGIN,
  FETCH_POINTSGOAL_SUCCESS,
  FETCH_POINTSGOAL_FAILURE,
  SET_POINTSGOAL_BEGIN,
  SET_POINTSGOAL_SUCCESS,
  SET_POINTSGOAL_FAILURE,
} from '../constants';
import {AsyncStorage} from 'react-native';
const initialState = {
  pointsGoal: -1,
  loading: false,
  error: null,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POINTSGOAL_BEGIN:
      console.log({name: 'FETCH_POINTSGOAL_BEGIN', oldState: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POINTSGOAL_SUCCESS:
      console.log({
        name: 'FETCH_POINTSGOAL_SUCCESS',
        payload: action.payload,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        pointsGoal: action.payload.pointsGoal,
      };

    case FETCH_POINTSGOAL_FAILURE:
      console.log({
        name: 'FETCH_POINTSGOAL_FAILURE',
        answer: action,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_POINTSGOAL_BEGIN:
      console.log({name: 'SET_POINTSGOAL_BEGIN', oldState: state});
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_POINTSGOAL_SUCCESS:
      console.log({
        name: 'SET_POINTSGOAL_SUCCESS',
        payload: action.payload,
        oldState: state,
      });
      return {
        ...state,
        loading: false,
        pointsGoal: action.payload.pointsGoal,
      };

    case SET_POINTSGOAL_FAILURE:
      console.log({
        name: 'SET_POINTSGOAL_FAILURE',
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
