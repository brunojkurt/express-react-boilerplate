import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect path="/" exact to={{ pathname: "/login" }} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/home" exact component={Home} />
        <Route path="*" component={() => <h1>404 Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes