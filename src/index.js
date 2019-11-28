import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Game from './components/game'
import { createStore } from 'redux'
import reducer from './reducers/rootReducer'

import './index.css';


const store = createStore(reducer)
// ======================================== //

ReactDOM.render(<Provider store={store}><Game /></Provider>, document.getElementById("root"))

