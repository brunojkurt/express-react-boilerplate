import React from 'react'

import { AuthProvider } from './contexts/Auth'
import { ServiceProvider } from './contexts/Service'
import Routes from './Routes'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <AuthProvider>
      <ServiceProvider>
        <GlobalStyle />
        <Routes />
      </ServiceProvider>
    </AuthProvider>
  )
}

export default App