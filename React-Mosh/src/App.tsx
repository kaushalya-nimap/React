// import React from 'react'
// import ListGroup from './components/ListGroup'
// const App = () => {
//   const items = [
//       "New York",
//       "California",
//       "San Francisco",
//       "Mumbai",
//       "Chennai",
//     ];
//     const handleSelctItem=(item:string)=>{
//       console.log(item)
//     }
  
//   return (
//     <div><ListGroup items={items} heading='List group' onSelectItem={handleSelctItem}/></div>
//   )
// }

// export default App

//building form from components 
import React from 'react'
import Form from './components/Form'
const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App