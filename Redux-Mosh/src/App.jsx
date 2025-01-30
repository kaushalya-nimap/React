import store from './store'
import React from 'react'
import { bugAdded,bugResolved } from './actions'

const App = () => {
  return (
    <div>App</div>
  )
}
const unsubscribe=store.subscribe(()=>{
  console.log("store changed",store.getState())
})

store.dispatch(bugAdded("Bug 1"))
store.dispatch(bugResolved(1))

console.log(store.getState())

export default App