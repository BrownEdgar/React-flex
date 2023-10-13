import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getComments } from "./feauters/comments/CommenstSlice"
import "./App.scss"
import Comments from "./Components/COmments"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getComments())
  }, [])

  return (
    <div className="Container">
      <Comments />
    </div>
  )
}
