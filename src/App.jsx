import React from 'react'
import { AllRoutes } from './routes/AllRoutes'
import { Footer, Header } from './components'

const App = () => {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App