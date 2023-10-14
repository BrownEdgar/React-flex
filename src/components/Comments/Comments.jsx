import { useDispatch, useSelector } from "react-redux";
import { filterComments } from "../../features/comments/commentsSlice";
import "./Comments.scss";

export default function Comments() {
  const comments = useSelector((state) => state.comments)
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    dispatch(filterComments({ count: e.target.value }));
  };
  return (
    <div className="Comments">
      {
        comments.isPending ? (
          <h1>Please wait...</h1>
        ) : (
          <>
            <select className="Comments_count" name="count" id="count" onChange={handleFilter}>
              <option value="all">All posts</option>
              {comments.data.original
                .filter(elem => elem.id % 5 === 0)
                .map((comment) => {
                  return (
                    <option className="Comments_option" value={comment.id} key={comment.id}>{comment.id}</option>
                  )
                })}
            </select>
            <div className="Comments_items">
              {comments.data.filtered.map((comment) => {
                return (
                  <div className="Comments__item" key={comment.id}>
                    <h2 className="Comments__name">{comment.name}</h2>
                    <span className="Comments__email">{comment.email}</span>
                    <p className="Comments__body">{comment.body}</p>
                  </div>
                );
              })}
            </div>
          </>
        )
      }
    </div>
  )
}
