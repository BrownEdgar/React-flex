import { useDispatch, useSelector } from "react-redux";
import { filterComments } from "../../features/comments/commentsSlice";
import "./Comments.scss";

export default function Comments() {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterComments({ count: e.target.value }));
  };
  return (
    <div className="Comments">
      {comments.ispending ? (
        <h1>Pending...</h1>
      ) : (
        <>
          <select
            className="Comments__select"
            name="quantity"
            id="quantity"
            onChange={handleFilter}
          >
            <option value="all">All Posts</option>
            {comments.data.original.map((comment) => {
              return (
                <option
                  className="Comments__options"
                  value={comment.id}
                  key={comment.id}
                >
                  {comment.id}
                </option>
              );
            })}
          </select>
          <div className="Comments__items">
            {comments.data.filtered.map((comment) => {
              return (
                <div className="Comments__item" key={comment.id}>
                  <h2 className="Comments__title">{comment.name}</h2>
                  <span className="Comments__email">{comment.email}</span>
                  <p className="Comments__info">{comment.body}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
