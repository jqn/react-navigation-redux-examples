import { combineReducers } from 'redux';
import { navigationReducer } from './Navigation';

export default combineReducers(Object.assign(navigationReducer));
