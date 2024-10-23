import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../Usercontext";

export default function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState('')
    const {setUserInfo} = useContext(UserContext)
  

async function  loginUser(ev){
ev.preventDefault()
const response = await fetch('https://blogbackend-z08y.onrender.com/login',{
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'
   
   
})
if(response.ok){
  response.json().then(userInfo =>{
    setUserInfo(userInfo)
    setRedirect(true)
  })
 
  
}else{
    alert('wrong credentials')
}


}
if(redirect){
    return <Navigate to={'/'}/>
}

    return(
<form className="login" onSubmit={loginUser}> 
    <h1>Login</h1>
    <input type="text" placeholder="userName"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    <input type="password" placeholder="password"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
    <button>Login</button>
</form>
    )
}