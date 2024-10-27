import React, { useEffect, useState } from 'react'
import Post from '../Post'
import { baseUrl } from '../url'

const IndexPage = () => {
const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`api/post`).then(response => {
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