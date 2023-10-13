import Comments from "./Components/Comments/Comments";
import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getComments } from "./features/comments/commentsSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  return (
    <div className="App">
      <h2 className="App__title">Posts</h2>
      <Comments />
    </div>
  );
}
