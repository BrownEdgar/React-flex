import axios from 'axios';
import { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom'
import ROUTES from '../routes';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
  }, [])
  return (
    <div>

      <h1>WELCOME TO POST N {id}</h1>
      <h2>Title {post.title}</h2>
      <p>{post.body}</p>

      <Link to={ROUTES.POSTS}>see all posts</Link>
    </div>
  )
}
