import React, { useState, useEffect } from 'react'
import AuthContext from './context'

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: null,
    loading: true
  })

  useEffect(() => {
    const fetchLocalAuthData = () => {
      const user = localStorage.getItem('user')
      const token = localStorage.getItem('token')
      setState(state => user && token ? {
          user: JSON.parse(user),
          token,
          loading: false
        } : {
          ...state,
          loading: false
      })
    }

    fetchLocalAuthData()
  }, [])

  const login = (user, token) => {
    setState({ user, token })
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setState({ user: {}, token: null })
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const contextData = {
    ...state,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={contextData}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider