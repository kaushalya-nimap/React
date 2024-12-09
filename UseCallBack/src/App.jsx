import React from 'react'
import ParentComponent from './components/ParentComponent'
function App() {
  //React.memo is a hoc prevent fc from rendering if its functions or props are not changed
  //After applying react memo to title. button and count component, the button is still getting re-rendered bcz te function is getting re-rendered.
  //useCallback return a memoized version of callback function that only chenges if dependencies are changed.
  return (
    <div>
      <ParentComponent/>
    </div>
  )
}

export default App