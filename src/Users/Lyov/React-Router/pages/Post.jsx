import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ROUTES from "../routes";


export default function Post() {
  const [post, setPost] = useState({})
  const [hasError, setHasError] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if (res.status === 200) {
          setPost(res.data)
        }
      }).catch(err => {
        setHasError(`Post with ${id} has not found!`)
      })

      return () => {
        
      }

  }, [id])
  return (
    <div>
      {hasError ? (
        <>
          <h1>{hasError}</h1>
          <Link to={'/' + ROUTES.POSTS}>All Posts</Link>
        </>
      ) : (
        <>
          <h1>Welcome to posts N {id}</h1>
          <h2>{post.title}</h2>
          <hr />
          <p>{post.body}</p>
          <Link to={'/' + ROUTES.POSTS}>All Posts</Link>
        </>
      )}

    </div>
  )
}
