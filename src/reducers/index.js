import { combineReducers } from 'redux';

import ChangeThemeReducer from './ChangeThemeReducer'
import CurrentTimeReducer from './CurrentTimeReducer'

const allReducers = combineReducers({
    // state: (state = {}) => state
    changed: ChangeThemeReducer,
    now: CurrentTimeReducer,
});

export default allReducers;
