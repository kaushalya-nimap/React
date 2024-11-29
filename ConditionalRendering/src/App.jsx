import React from 'react'
import { useState } from 'react'

function App() {
  const[isLogin,setIsLogin]=useState(false)
  const handleLogin=()=>{
    setIsLogin(!isLogin)
  }
  const message=isLogin?"Welcome User":"Please login"
  const buttonLabel=isLogin?"Log Out":"Log In"

  const [isOn, setIsOn] = useState(false); // State to track the toggle

  const handleToggle = () => {
    setIsOn(!isOn); // Toggle the state
  };

  return (
    <div>
      <h1>Conditional rendering example</h1>
      <h2>Button toggle</h2>
      <p>{message}</p>
      <button onClick={handleLogin}>{buttonLabel}</button>
      {/* {isLogin?
      (
      <div>
        <p>Welcome User</p>
        <button onClick={handleLogin}>Logout</button>
      </div>
      )
      :
      (
        <div>
          <p>Please Login</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )
      } */}
      <h2>Switch input field example</h2>
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle} // Handle toggle on change
        />
        <span>Toggle Switch</span>
      </label>
      <p>{isOn ? "ON" : "OFF"}</p> {/* Display ON/OFF based on state */}
    

    </div>
  )
}

export default App