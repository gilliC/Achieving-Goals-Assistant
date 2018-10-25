import {combineReducers} from 'redux';

import CounterReducer from './counter_reducer';

export default combineReducers({
  count: CounterReducer,
});
