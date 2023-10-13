import { useDispatch, useSelector } from 'react-redux'
import { changeComments } from '../feauters/comments/CommenstSlice'
import "./Comments.scss"


export default function Comments() {
  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch()

  const handleChange =(e) =>{
    dispatch(changeComments({quantity: e.target.value}))
  }
  return (
    <>
      {comments.ispending 
        ? <h1>Pending...</h1> 
        : 
          <>
          <select name="quantity" id="quantity" onChange={handleChange}>
            <option value="all">All</option>
            {comments.data.original.map(comment => {
              return(
                <option value={comment.id} key ={comment.id}>{comment.id}</option>
              )
            })}
          </select>
          <div className="item-flex">
            {comments.data.filtered.map(comment => {
              return(
                <div key = {comment.id} className="item">
                  <h2>Name: {comment.name}</h2>
                  <p key = {comment.id}>{comment.body}</p>
                </div>
              )
            })}
          </div>
          </>
        }
    </>
  )
}
