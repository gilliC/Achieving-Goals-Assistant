import React from 'react';
import {AsyncStorage} from 'react-native';
import {
  FETCH_GOALS_BEGIN,
  FETCH_GOALS_FAILURE,
  FETCH_GOALS_SUCCESS,
  SET_GOALS_BEGIN,
  SET_GOALS_SUCCESS,
  SET_GOALS_FAILURE,
} from './constants';
const goalsKey = 'goals';

export function addGoal(goal) {
  return dispatch => {
    dispatch(fetchGoalsBegin);
    (async () => {
      try {
        const oldValue = await AsyncStorage.getItem(goalsKey);
        (async () => {
          try {
            let newValue;
            if (oldValue === undefined) newValue = [goal];
            else newValue = oldValue.concat([goal]);
            await AsyncStorage.setItem(goalsKey, newValue);
            dispatch(setGoalsSuccess(newValue));
          } catch (error) {
            dispatch(setGoalsFailure(error));
          }
        })();
      } catch (error) {
        dispatch(fetchGoalsFailure(error));
      }
    })();
  };
}

export const fetchGoalsBegin = () => ({
  type: FETCH_GOALS_BEGIN,
});
export const fetchGoalsSuccess = goals => ({
  type: FETCH_GOALS_SUCCESS,
  payload: {goals},
});
export const fetchGoalsFailure = error => ({
  type: FETCH_GOALS_FAILURE,
  payload: {error: error},
});
export const setGoalsBegin = () => ({
  type: SET_GOALS_BEGIN,
});
export const setGoalsSuccess = goals => ({
  type: SET_GOALS_SUCCESS,
  payload: {goals},
});
export const setGoalsFailure = error => ({
  type: SET_GOALS_FAILURE,
  payload: {error: error},
});
