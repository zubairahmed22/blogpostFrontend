import { useState } from "react"
import {baseUrl} from "../url"


export default function RegisterPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   async  function register(e){
   e.preventDefault()
 
  const response =  await  fetch(`api/register`,{
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers:{'Content-Type': 'application/json'},
       })
   

    console.log(response)
    if(response.status === 200){
        alert("Registration success")
    }else{
      alert("Registration Faild")
    }
    
   
 
  }

    return(
        <form className="register" onSubmit={register}> 
        <h1>Register</h1>
        <input type="text" placeholder="userName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
    </form>
    )
}