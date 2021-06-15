import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthContext } from '../../hooks'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token, loading } = useAuthContext()
  if (loading) {
    return <h5>Loading...</h5>
  }

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute