import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  const [Repetpassword, setRepetPassword] = useState("Repetpassword");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    if(user.role=="Student")
    {
      history.push('/')
    }
    else if(user.role==="Admin")
    {
      history.push('/admin-dashboard')
    }
    else(user.role==="Instractor")
    {
      history.push('/Instractor-dashboard')
    }
  }



  
  return (
    <div>
  <p style={{textAlign:"center"}}>Login</p>



 <form style={{textAlign:"center"}} onSubmit={handleLogin}>

        <label htmlfor="name">Name</label>
        <input required id="name" type="text" placeholder="Name..."/>
        <br></br>
        <label htmlFor="email">Email</label>
        <input required id="email" type="email" placeholder="Email..."/>
        <br></br>
        <label htmlfor="password">Password</label>
        <input required id="password" type="text" placeholder="Password..."/>
        <br></br>
        <label htmlfor="password">RepetPassword</label>
        <input required id="password" type="text" placeholder="RepetPassword..."/>


  </form>


      </div>
  );
}

export default AdminLogin