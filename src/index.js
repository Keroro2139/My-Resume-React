import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'

import './style.scss'
import allReducers from './reducers'
import App from './AppContainer'

import { CHANGE_THEME, GET_CURRENT_TIME } from './actions'

if (!global._babelPolyfill) {
    require('babel-polyfill')
}

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
)
var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
var now = hour.toString() + '.' + min.toString()

store.dispatch({
    type: GET_CURRENT_TIME,
    payload: now
})

if (now >= '6.00' && now <= '17.59') {
    store.dispatch({
        type: CHANGE_THEME,
        payload: 'lightTheme'
    })
}
else if (now >= '18.00' && now <= '5.59') {
    store.dispatch({
        type: CHANGE_THEME,
        payload: 'darkTheme'
    })
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)