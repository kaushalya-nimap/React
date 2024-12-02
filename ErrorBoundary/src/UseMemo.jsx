import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function UseMemo() {
    const[count,setCount]=useState(0)
    const[item,setItem]=useState(10)
    const multiMemo=useMemo(()=>{
        console.warn('multi')
        return count*5
    },[count])
    // function multiCount(){
    //     console.warn('multi')
    //     return count*5
    // }
  return (
    <>
    <div>UseMemo</div>
    <h2>Count:{count}</h2>
    <h2>Item:{item}</h2>
    <h2>{multiMemo}</h2>
    <button onClick={()=>setCount(count+1)}>Update Count</button>
    <button onClick={()=>setItem(item+1)}>Update Item</button>
    </>
  )
}

export default UseMemo