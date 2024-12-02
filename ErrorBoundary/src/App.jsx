import React from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
  <div>
     <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
  </div>    
  )
}

export default App