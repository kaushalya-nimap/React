import React from 'react'

function ComponentB(props) {
   const{name,age,occupation}=props.userdata

  return (
    <div>
        <p>Component B</p>
        <p>Message:{props.message}</p>
        <p>Name:{name}</p>
        <p>age:{age}</p>
        <p>Occupation:{occupation}</p>
    </div>
  )
}

export default ComponentB