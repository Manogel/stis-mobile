import { combineReducers } from 'redux';

import { reducer as topics } from './topics';

const reducers = combineReducers({
  topics,
});

export default reducers;
