import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import fetchtest from "./fetchTest"

export const rootReducer = combineReducers({
    tableReducer,
    fetchtest
});
