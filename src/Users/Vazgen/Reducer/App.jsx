import { useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";
import "./App.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [boolButton, setboolButton] = useState(false);
  const [inpValue, setInpValue] = useState("");

  const showUsers = () => {
    axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 10,
      },
    })
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: "add-posts", payload: { data: data } });
      });
    setboolButton(!boolButton);
  };

  const handleUser = () => {
    dispatch({ type: "add-devs", payload: { inpValue: inpValue } });
    setInpValue("");
  };

  return (
    <div className="Container">
      <div className="Container__items">
        <p>Actions done: {state.actions}</p>
        {state.developers.length > 0 ? (
          <p>
            Creators:{" "}
            {state.developers.map((user, index) => {
              return <span key={index}>{user}, </span>;
            })}
          </p>
        ) : null}
        <p>
          {" "}
          Array:
          {state.arr.map((number, index) => {
            return (
              <span key={index}>
                {" "}
                {index === state.arr.length - 1 ? number : `${number}, `}
              </span>
            );
          })}
        </p>

        <button onClick={showUsers} disabled={boolButton}>
          Add posts
        </button>
        <input
          className="Container__addtext"
          type="text"
          placeholder="Enter name"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />
        <button className="Container__addbutton" onClick={handleUser}>
          Add name
        </button>
        <button
          className="Container_assortment"
          onClick={() => dispatch({ type: "assortment" })}
        >
          Assortment
        </button>
        <button
          className="Container__replaceid"
          onClick={() => dispatch({ type: "replace-idArr" })}
        >
          Replace ID into Index
        </button>
        <div className="item"></div>
      </div>
      <div className="Container__posts">
        {state.posts.length > 0
          ? state.posts.map((post) => {
              return (
                <div className="Container__postitem" key={post.id}>
                  <span className="Container__postid">{post.id}</span>
                  <h3 className="Container__posttitle">{post.title}</h3>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="Container__posticon"
                    onClick={() =>
                      dispatch({ type: "delete-post", payload: `${post.id}` })
                    }
                  />
                  <p className="Container__postinfo">{post.body}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
