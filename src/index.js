import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './components/Facebook/reducer';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers)
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
