import React from 'react'
import ServiceContext from './context'
import * as auth from './api/auth' 

const ServiceProvider = ({ children }) => {
  const api = {
    auth
  }

  return (
    <ServiceContext.Provider value={api}>
      { children }
    </ServiceContext.Provider>
  )
}

export default ServiceProvider