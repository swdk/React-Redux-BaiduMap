import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import Point from './containers/point';

const logger = createLogger();



//creating store to store states
const store = createStore(
    allReducers,
);

//initial point and searhc
var ipoint = new Point(116.404,39.915);
store.dispatch({
  type: 'INIT_MAP',
  payload: new BMap.Point(116.404,39.915)
})

store.dispatch({
  type: 'INIT_SEARCH',
  payload: 'HONG KONG'
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
