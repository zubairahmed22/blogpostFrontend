import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './Usercontext'

export const Header = () => {
 const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(() => {
  fetch('https://blogbackend-z08y.onrender.com/profile',{
    credentials: 'include'
  }).then(response =>{
    response.json().then(userInfo =>{
    setUserInfo(userInfo)


    })
  })

  },[])

  const username = userInfo?.username

function logout(){
  fetch('https://blogbackend-z08y.onrender.com/logout',{
    credentials: 'include',
    method: 'POST'
  })
  setUserInfo(null)
}

  return (
    <header>
    <Link to="/" className="logo">MyBlog</Link>
    <nav>
      {username && (
        <>
        <Link to={'/create'}>Create New Post</Link>
        <a onClick={logout} className='logout'>Logout</a>
        </>
      )}
    {!username && (
   <>
     <Link to='/login'>login</Link>
     <Link to='/register'>Register</Link>  
   </>
    )}
     
      
    </nav>
  </header>
  )
}
