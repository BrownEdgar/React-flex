
import { Link, useLoaderData } from "react-router-dom";
import './Posts.scss'

function Posts() {
  const posts = useLoaderData()

  return (
    <ul className="Posts">
       {
        posts.map(post => <Link key={post.id} to={`${post.id}`}>{post.title}</Link>)
       }
    </ul>
  )
}


const postLoader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}

export {Posts, postLoader}