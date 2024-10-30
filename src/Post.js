import React from 'react'
import {formatISO9075} from 'date-fns'
import { Link } from 'react-router-dom';
import { baseUrl } from './url';

const Post = ({title, _id,summery, cover, content, author,createdAt}) => {
  console.log(cover)
  return (
    
    <div className="entries">
    <div className="image">
      <Link to={`/post/${_id}`}>
    <img src={cover &&  cover}

    alt="blog image"/>
        </Link>
    </div>
     <div  className="content">
    <Link to={`/post/${_id}`}>
    <h2>{title}</h2>
    </Link>
    <p className="info">
      <span className="author">{author.username}</span>
      <time>{formatISO9075(new Date(createdAt))}</time>

    </p>
    <p className="summery-post">{summery}</p>
    </div>
  </div>
  )
}

export default Post