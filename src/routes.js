import React from 'react'
import {Route, IndexRedirect } from 'react-router'
import Login from './Login/components/login'
import Dashboard from './Dashboard/components/dashboard'
import mainPage from './Layout/components/MainContent'
import profile from './Login/components/profile'
import CreateEvent from './Dashboard/components/CreateEvent'

const routes = (
      <Route>
        <Route path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mainPage" component={mainPage} />
        <Route path="/profile" component={profile} />
        <Route path="/create" component={CreateEvent} />
      </Route>
)

export default routes
