import React from 'react'
import ReactDOM from 'react-dom'

import { Router, hashHistory } from 'react-router'

import routes from './routes.jsx'

const app = document.createElement('div')

document.body.appendChild(app)

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, app)
