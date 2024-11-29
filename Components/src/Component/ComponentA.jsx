import React from 'react'
import ComponentB from './ComponentB'

function ComponentA() {
    const data={
        name:'John',
        age:24,
        occupation:'qwer'
    }
    const message="Hi I am from component A"
  return (
    <div>
        <ComponentB message={message} userdata={data}/>
    </div>
  )
}

export default ComponentA