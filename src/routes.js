import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route component={Welcome} />
      </Switch>
    )
  }
}
