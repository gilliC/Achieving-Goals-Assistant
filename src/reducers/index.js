import {combineReducers} from 'redux';

import CounterReducer from './counter_reducer';
import GoalsReducer from './goals_reducer';

export default combineReducers({
  count: CounterReducer,
  goals: GoalsReducer,
});
