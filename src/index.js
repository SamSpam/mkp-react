import React from 'react'
import ReactDOM from 'react-dom'

import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes.jsx'
import store from './store.js'
window.store = store

const app = document.createElement('div')

document.body.appendChild(app)


const render = () => {
  ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
    </Provider>, app)
}

store.subscribe(render)

render()
