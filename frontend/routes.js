import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './components/home'

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path='*' component={NotFound} />
  </Route>
)
