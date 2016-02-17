import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import Home from './components/Home.jsx'
import MessageBoard from './components/modules/Group/MessageBoard/index.jsx'
import Profile from './components/modules/Profile/index.jsx'
import NoticeBoard from './components/modules/NoticeBoard/index.jsx'
import Group from './components/modules/Group/index.jsx'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/messageboard' component={MessageBoard} />
    <Route path='/profile' component={Profile} />
    <Route path='/noticeboard' component={NoticeBoard} />
    <Route path='/group' component={Group} />

  </Route>
)
