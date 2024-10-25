import React, { useEffect, useState } from 'react'
import Post from '../Post'

const IndexPage = () => {
const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://blogbackend-z08y.onrender.com/api/post').then(response => {
     response.json().then(posts =>{
       
       setPosts(posts)
     })
    })
  },[])
  return (
    <>
    {!posts?(<div>loading...</div>):posts.length > 0 && posts?.map(post =>(
     
     <Post
     
     {...post}
     />
    
    
     
 ))}
    
    </>
  )
}

export default IndexPage