import { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import { Navigate } from 'react-router-dom'
import Editor from '../Editor'
import { baseUrl } from '../url'
const token = localStorage.getItem('jwt');
console.log(token)





export default function CreatePost(){
    const [title, setTitle]= useState('')
    const [summery, setSummery] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)
  
     async function createNewPost(ev){
        ev.preventDefault()


        const data = new FormData();
        
        
        data.set('title', title)
        data.set('summery', summery)
        data.set('content', content)
        data.set('file',files[0])
       
       
       const response = await fetch(`${baseUrl}/api/post`,{
           method: "POST" ,
           
           credentials: 'include',
          
           
        body: data,
           
        })
        if(response.ok)
          setRedirect(true)
        }

     if(redirect){
      return <Navigate to={'/'}/>
     }


    return(
      <form onSubmit={createNewPost}>
        <input type="title" placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input type="summery" placeholder="summery"
        value={summery}
        onChange={(e) => setSummery(e.target.value)
        }
        />
        <input type="file"
       
        onChange={(e) => setFiles(e.target.files)}
        /> 
        <Editor  value={content} onChange={setContent}/>

        <button style={{marginTop: '10px'}}>Create post</button>
      </form>
    )
}