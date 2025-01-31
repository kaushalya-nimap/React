import configureStore from './store/configureStore'
import React from 'react'
//import { bugAdded,bugResolved } from './store/actions'
import * as actions from "./store/bugs"
import reducer from "./store/bugs"
const App = () => {
  return (
    <div>App</div>
  )
}
const store=configureStore()
const unsubscribe=store.subscribe(()=>{
  console.log("store changed",store.getState())
})

store.dispatch(actions.bugAdded({description:"Bug 1"}))
store.dispatch(actions.bugAdded({description:"Bug 2"}))
store.dispatch(actions.bugAdded({description:"Bug 3"}))
store.dispatch(actions.bugResolved({id:1}))
store.dispatch(actions.bugRemoved({id:1}))


console.log(store.getState())

export default App