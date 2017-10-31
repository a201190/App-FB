import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from './Container/Footer'
import Home from './Container/Home'
class Router extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Footer}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    )
  }
}
export default Router
