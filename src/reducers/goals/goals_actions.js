import React from 'react';
import {AsyncStorage} from 'react-native';
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
} from '../constants';
const goalsKey = 'Goals List';

export function goalsInitialize() {
  return dispatch => {
    dispatch(fetchGoalsBegin());
    (async () => {
      let goalsList;
      let isEmpty = true;
      try {
        const goalsString = await AsyncStorage.getItem(goalsKey);
        if (goalsString !== null) {
          goalsList = JSON.parse(goalsString);
          if (goalsList.length > 0) isEmpty = false;
          dispatch(fetchGoalsSuccess(goalsList, isEmpty));
        } else {
          (async () => {
            dispatch(setGoalsSuccess(['No Goals Yet'], isEmpty));
          })();
        }
      } catch (error) {
        dispatch(fetchGoalsFailure(error));
      }
    })();
  };
}

export function addGoal(goal) {
  return dispatch => {
    dispatch(fetchGoalsBegin());
    (async () => {
      try {
        const oldList = await AsyncStorage.getItem(goalsKey);
        (async () => {
          try {
            let newList;
            if (!oldList) {
              newList = [goal];
            } else {
              let arrayedOldValue = JSON.parse(oldList);
              newList = arrayedOldValue.concat([goal]);
            }
            newList = JSON.stringify(newList);
            await AsyncStorage.setItem(goalsKey, newList);
            dispatch(setGoalsSuccess(newList, false));
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

export function deleteGoal(index) {
  return dispatch => {
    dispatch(deleteGoalBegin());
    (async () => {
      try {
        let oldList = await AsyncStorage.getItem(goalsKey);
        (async () => {
          try {
            let isEmpty = false;
            index = index - 1;
            oldList = JSON.parse(oldList);
            oldList.splice(index, 1);
            if (oldList.length === 0) isEmpty = true;
            let newList = JSON.stringify(oldList);
            await AsyncStorage.setItem(goalsKey, newList);
            dispatch(deleteGoalSuccess(newList, isEmpty));
          } catch (error) {
            deleteGoalFailure(error);
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
export const fetchGoalsSuccess = (goalsList, isEmpty) => ({
  type: FETCH_GOALS_SUCCESS,
  payload: {goalsList: goalsList, isEmpty: isEmpty},
});
export const fetchGoalsFailure = error => ({
  type: FETCH_GOALS_FAILURE,
  payload: {error},
});
export const setGoalsBegin = () => ({
  type: SET_GOALS_BEGIN,
});
export const setGoalsSuccess = (goalsList, isEmpty) => ({
  type: SET_GOALS_SUCCESS,
  payload: {goalsList: goalsList, isEmpty: isEmpty},
});
export const setGoalsFailure = error => ({
  type: SET_GOALS_FAILURE,
  payload: {error: error},
});

export const deleteGoalBegin = () => {
  return {
    type: DELETE_GOAL_BEGIN,
  };
};
export const deleteGoalSuccess = (goalsList, isEmpty) => ({
  type: DELETE_GOAL_SUCCESS,
  payload: {goalsList: goalsList, isEmpty: isEmpty},
});
export const deleteGoalFailure = error => ({
  type: DELETE_GOAL_FAILURE,
  payload: {error: error},
});
