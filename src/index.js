import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Game from './components/game'
import * as sagas from "./sagas";

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/rootReducer'

import './index.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )

Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))

//const action = type => store.dispatch({type})
// ======================================== //

ReactDOM.render(<Provider store={store}><Game /></Provider>, document.getElementById("root"))

