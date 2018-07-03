import React from 'react'
import {Route, IndexRedirect } from 'react-router'
import Login from './Login/components/login'
import Dashboard from './Dashboard/components/dashboard'
import mainPage from './Layout/components/MainContent'

const routes = (
      <Route>
        <Route path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mainPage" component={mainPage} />
      </Route>
)

export default routes
