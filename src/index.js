import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import { HashRouter  as Router } from "react-router-dom"
import {compose, createStore, applyMiddleware} from 'redux'
import {middlewares} from './middleware'
import rootReducer from './reducers'
import App from './App'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux devtools
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>                   
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)

// expose store when run in Cypress
if (window.Cypress) {
    window.store = store
  }

registerServiceWorker();