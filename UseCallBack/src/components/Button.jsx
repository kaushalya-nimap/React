import React from 'react'

function Button({handleClick,children}) {
    console.log(`Rendering button ${children}`)
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

export default React.memo(Button) 
// useMemo	useCallback
// Memoizes return values to optimize computations.	Memoizes functions to prevent recreation.
// Useful for expensive operations like calculations.	Useful for passing stable function references.
// Returns a computed value.	Returns a memoized function reference.
