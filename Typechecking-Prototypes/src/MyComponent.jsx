import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({name,age,isStudent}) => {

  return (
    <div>
        <h1>Hello {name}</h1>
        <h1>My age is {age}</h1>
        <h1>I am a student {isStudent?"Yes":"No"}</h1>
    </div>
  )

}
MyComponent.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isStudent:PropTypes.bool.isRequired
}
// MyComponent.defaultProps={
//     //isStudent:false
// }

export default MyComponent