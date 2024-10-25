import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import Editor from "../Editor"
import { useParams } from "react-router-dom"
const EditPage = () =>{
  const {id} = useParams()




    const [title, setTitle]= useState('')
    const [summery, setSummery] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

     useEffect(() => {
      fetch(`https://blogbackend-z08y.onrender.com/api/post/${id}`).then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title)
          setContent(postInfo.content)
          setSummery(postInfo.summery)
          
        })
      })
     },[])

    async function updatePost (e){
      e.preventDefault()
      const data = new FormData()
      data.set('title', title)
      data.set('summery', summery)
      data.set('content', content)
      data.set("id", id)
      if(files?.[0]){
        data.set('file',files?.[0])
      }
    
   const response =  await  fetch(`https://blogbackend-z08y.onrender.com/api/post`,{
        method: "PUT",
        body: data,
        credentials: 'include'

      })

      if(response.ok){
        setRedirect(true)
      }
        

    }

    if(redirect){
      return <Navigate to={'/post/' + id}/>
    }


return(
<form onSubmit={updatePost}>
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
        <Editor value={content}
        onChange={setContent}
       
          />
        <button style={{marginTop: '10px'}}>Update post</button>
      </form>  
)
}

export default EditPage