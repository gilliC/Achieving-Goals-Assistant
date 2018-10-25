import React from 'react';
import {AsyncStorage} from 'react-native';
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
    dispatch(fetchDataBegin);
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
export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});
export const fetchDataSuccess = count => ({
  type: FETCH_DATA_SUCCESS,
  payload: {count},
});
export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: {error: error},
});
export const setDataBegin = () => ({
  type: SET_DATA_BEGIN,
});
export const setDataSuccess = count => ({
  type: SET_DATA_SUCCESS,
  payload: {count},
});
export const setDataFailure = error => ({
  type: SET_DATA_FAILURE,
  payload: {error: error},
});
