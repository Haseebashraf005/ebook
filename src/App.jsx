import React from 'react'
import { AllRoutes } from './routes/AllRoutes'
import { Footer, Header, ScrolToTop } from './components'

const App = () => {
  return (
    <>
      <div className="App dark:bg-slate-800">
        <ScrolToTop />
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </>
  )
}

export default App