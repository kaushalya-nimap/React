import React from 'react'
import { useEffect,useRef } from 'react'
import { useState } from 'react'

function App() {
  const[count,setCount]=useState(0)
  // let a=0;
   //this way every time the count value changes the console is printed but a is shown as 1, bcoz at every count change the component is re-rendered and again the value of a is set to 0 i.e. the value of a does not persiste to handle this useRef hook is used.

   //other solution
  let a=useRef(0)
  useEffect(()=>{
    //a=a+1
    a.current=a.current+1 ////here component is re-rendered but the value of a persists unless refresh
    console.log('the rendered value of a is:',a.current)
  })

  const handleCount=()=>{
    setCount(count+1)
  }

  return (
    <>
    <div>Use Ref</div>
    <button onClick={handleCount}>Count increment :{count}</button>
    </>
  )
}

export default App