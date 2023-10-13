import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getComments } from './features/comments/CommentSlice';
import { getselectComments } from './features/comments/selectComment/selectComment';
import './app.css'


export default function App() {
  const [limit, setLimit] = useState(0)
 const comments = useSelector((state) => state.comments);
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(getComments())
 }, [])
 const select = useSelector((state)=> state.select);
 const dispatch1 = useDispatch();
 useEffect(() => {
  dispatch1(getselectComments(limit))
 }, [limit])
 


  return (
    <div>
       <pre>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
        <option >0</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
      </select>
        {JSON.stringify(select, null, 1)}
      <br />
        {JSON.stringify(comments, null, 1)}
       </pre>
       
    </div>
  )
}
