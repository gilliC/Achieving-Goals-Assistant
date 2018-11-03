import React from 'react';
import {AsyncStorage} from 'react-native';
import {
  FETCH_COUNT_BEGIN,
  FETCH_COUNT_FAILURE,
  FETCH_COUNT_SUCCESS,
  SET_COUNT_BEGIN,
  SET_COUNT_SUCCESS,
  SET_COUNT_FAILURE,
} from './constants';
const countKey = 'count';

export function counterInitialize() {
  return dispatch => {
    dispatch(fetchDataBegin());
    (async () => {
      try {
        const value = await AsyncStorage.getItem(countKey);
        if (value !== null) {
          dispatch(fetchDataSuccess(value));
        } else {
          (async () => {
            try {
              await AsyncStorage.setItem(countKey, '0');
              dispatch(setDataSuccess('0'));
            } catch (error) {
              dispatch(setDataFailure(error));
            }
          })();
        }
      } catch (error) {
        dispatch(fetchDataFailure(error));
      }
    })();
  };
}
export function counterIncrease() {
  return dispatch => {
    dispatch(fetchDataBegin());
    (async () => {
      try {
        const oldValue = await AsyncStorage.getItem(countKey);
        if (oldValue !== null) {
          (async () => {
            try {
              let newValue = (parseInt(oldValue) + 1).toString();
              await AsyncStorage.setItem(countKey, newValue);
              dispatch(setDataSuccess(newValue));
            } catch (error) {
              dispatch(setDataFailure(error));
            }
          })();
        } else dispatch(fetchDataFailure({name: 'equals null'}));
      } catch (error) {
        dispatch(fetchDataFailure(error));
      }
    })();
  };
}
export function counterDecrease() {
  return dispatch => {
    dispatch(fetchDataBegin());
    (async () => {
      try {
        const oldValue = await AsyncStorage.getItem(countKey);
        if (oldValue !== null && oldValue !== '0') {
          (async () => {
            try {
              let newValue = ((oldValue - 1) | 0).toString();
              if (newValue < 0) newValue = '0';
              await AsyncStorage.setItem(countKey, newValue);
              dispatch(setDataSuccess(newValue));
            } catch (error) {
              dispatch(setDataFailure(error));
            }
          })();
        } else dispatch(fetchDataFailure({name: 'equals null or zero'}));
      } catch (error) {
        dispatch(fetchDataFailure(error));
      }
    })();
  };
}
export const fetchDataBegin = () => ({
  type: FETCH_COUNT_BEGIN,
});
export const fetchDataSuccess = count => ({
  type: FETCH_COUNT_SUCCESS,
  payload: {count},
});
export const fetchDataFailure = error => ({
  type: FETCH_COUNT_FAILURE,
  payload: {error: error},
});
export const setDataBegin = () => ({
  type: SET_COUNT_BEGIN,
});
export const setDataSuccess = count => ({
  type: SET_COUNT_SUCCESS,
  payload: {count},
});
export const setDataFailure = error => ({
  type: SET_COUNT_FAILURE,
  payload: {error: error},
});
