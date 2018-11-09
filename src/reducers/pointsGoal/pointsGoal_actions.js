import React from 'react';
import {AsyncStorage} from 'react-native';
import {
  FETCH_POINTSGOAL_BEGIN,
  FETCH_POINTSGOAL_SUCCESS,
  FETCH_POINTSGOAL_FAILURE,
  SET_POINTSGOAL_BEGIN,
  SET_POINTSGOAL_SUCCESS,
  SET_POINTSGOAL_FAILURE,
} from '../constants';

const pointsGoalKey = 'points goal';
const initialGoal = '100';

export function pointsGoalInitialize() {
  return dispatch => {
    dispatch(fetchPointsGoalBegin());
    (async () => {
      try {
        const value = await AsyncStorage.getItem(pointsGoalKey);
        if (value !== null) {
          dispatch(fetchPointsGoalSuccess(value));
        } else {
          (async () => {
            try {
              await AsyncStorage.setItem(pointsGoalKey, initialGoal);
              dispatch(setPointsGoalSuccess(initialGoal));
            } catch (error) {
              dispatch(setPointsGoalFailure(error));
            }
          })();
        }
      } catch (error) {
        dispatch(fetchPointsGoalFailure(error));
      }
    })();
  };
}
export function pointsGoalIncrease() {
  return dispatch => {
    dispatch(fetchPointsGoalBegin());
    (async () => {
      try {
        const oldValue = await AsyncStorage.getItem(pointsGoalKey);
        if (oldValue !== null) {
          (async () => {
            try {
              let newValue = getNewGoal(parseInt(oldValue));
              await AsyncStorage.setItem(pointsGoalKey, newValue);
              dispatch(setPointsGoalSuccess(newValue));
            } catch (error) {
              dispatch(setPointsGoalFailure(error));
            }
          })();
        } else dispatch(fetchPointsGoalFailure({name: 'equals null'}));
      } catch (error) {
        dispatch(fetchPointsGoalFailure(error));
      }
    })();
  };
}

//get int return string.
function getNewGoal(oldGoal) {
  let stringOldGoal = oldGoal.toString();
  let newGoal;
  if (stringOldGoal[0] === '5') newGoal = oldGoal * 2;
  else newGoal = oldGoal * 5;
  return newGoal.toString();
}

export const fetchPointsGoalBegin = () => ({
  type: FETCH_POINTSGOAL_BEGIN,
});
export const fetchPointsGoalSuccess = pointsGoal => ({
  type: FETCH_POINTSGOAL_SUCCESS,
  payload: {pointsGoal},
});
export const fetchPointsGoalFailure = error => ({
  type: FETCH_POINTSGOAL_FAILURE,
  payload: {error: error},
});
export const setPointsGoalBegin = () => ({
  type: SET_POINTSGOAL_BEGIN,
});
export const setPointsGoalSuccess = pointsGoal => ({
  type: SET_POINTSGOAL_SUCCESS,
  payload: {pointsGoal},
});
export const setPointsGoalFailure = error => ({
  type: SET_POINTSGOAL_FAILURE,
  payload: {error: error},
});
