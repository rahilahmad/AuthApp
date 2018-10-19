import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './mainReducer';

const middleware = [thunk];
console.log(store.getState())

export const store = createStore(
  reducers(),

  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
  
);
