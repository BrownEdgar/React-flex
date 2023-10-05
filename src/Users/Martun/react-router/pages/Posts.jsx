import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data))
    }, [])
    return(
            <ul className="Posts">
            {
                posts.map(post => <Link key={post.id} to={`${Posts.id}`}>{post.title}</Link> )
            }
            </ul>
    )
}