import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './components/Facebook/reducer';

const middleware = [thunk];

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
