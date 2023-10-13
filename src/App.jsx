import { useEffect } from "react"
import Comments from "./components/Comments/Comments";
import { useDispatch } from "react-redux"
import { getComments } from "./features/comments/commentsSlice"
import "./App.scss";


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  return (
    <div className="App">
      <Comments />
    </div>
  )
}

