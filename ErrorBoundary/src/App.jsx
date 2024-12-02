import React from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary'
import UseMemo from './UseMemo'

function App() {
  return (
  <div>
     {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      <UseMemo/>
  </div>    
  )
}

export default App