import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const BASE_URL = "http://localhost:3000/data";
  const config = {
    headers: {
      Authorization: 'Bearer ACCESS_TOKEN'
    }
  };
  const fetchuser = async () => {
    try {
      const response = await axios.get(BASE_URL,config);
      console.log("response data", response.data);
      setUser(response.data);
      const token = localStorage.getItem("accessToken");
      console.log("token",token
        
      )
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async (id) => {
    try {
      const updatedUser = {
        name: name,
        email: mail,
      };
      const response = await axios.put(`${BASE_URL}${id}`, updatedUser);
      console.log("response of updated user", response.data);
      setUser((prevState) =>
        prevState.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        )
      );
      setName("");
      setMail("");
      console.log(response.data)
    } catch (err) {
      console.log("Error during update of records", err);
    }
  };
  // const addNewUser=async()=>{
  //   const newUser={
  //     name:'Sara',
  //     email:'sara@gmail.com'
  //   }
  //   const response=await axios.post(`${BASE_URL}`,newUser)
  //   console.log('response after post',response.data)
  //   const updatedResponse=await axios.get(BASE_URL)
  //   console.log('Updated response',updatedResponse.data)
  //   setUser(updatedResponse.data)
  // }

  useEffect(() => {
    fetchuser();
   // addNewUser()
  }, []);

  
  return (
    <div>
      <h1>User</h1>
      {user.map((u) => (
        <li key={u.id}>
          {u.id}-{u.name}-{u.email}
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="mail"
            placeholder="email"
            onChange={(e) => setMail(e.target.value)}
          />
          <button onClick={() => updateUser(u.id)}></button>
        </li>
      ))}
    </div>
  );
};

export default App;
