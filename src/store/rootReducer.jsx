import { combineReducers } from 'redux';
import blog from './blog/reducer';
import newEntry from './newEntry/reducer';

export const rootReducer = combineReducers({
    blog,
    newEntry
})