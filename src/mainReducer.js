import { fbReducer } from './components/Facebook/reducer';
import { gmReducer } from './components/Google/reducer';
import { linkReducer } from './components/LinkedIn/reducer';
import {calenderReducer} from './components/calender/reducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    fbReducer,
    gmReducer,
    linkReducer,
    calenderReducer
});