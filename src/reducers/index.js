import {combineReducers} from 'redux';

import CounterReducer from './counter/counter_reducer';
import GoalsReducer from './goals/goals_reducer';
import PointsGoalReducer from './pointsGoal/pointsGoal_reducer';

export default combineReducers({
  count: CounterReducer,
  goalsList: GoalsReducer,
  pointsGoal: PointsGoalReducer,
});
