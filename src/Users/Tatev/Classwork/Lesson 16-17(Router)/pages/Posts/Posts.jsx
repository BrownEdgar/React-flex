import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './Posts.scss'

export default function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='Posts'>
      {
        posts.map(post => {
          return <Link key={post.id} to={`${post.id}`}>{post.title}</Link>
        })
      }
    </div>
  )
}
