import { fbReducer } from './components/Facebook/reducer';
import { gmReducer } from './components/Google/reducer';
import { combineReducers } from 'redux';

export const reducers = () => {
    return combineReducers({
        fbReducer,
        gmReducer,
    })
}