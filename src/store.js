import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './mainReducer';

const middleware = [thunk];


export const store = createStore(
  reducers,
  console.log(store.getState()),
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )  
);
