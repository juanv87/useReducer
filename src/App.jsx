import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { INITIAL_STATE, postReducer } from "./postReducer";
import { ACTION_TYPES } from "./postActionsTypes";
import Form from "./Form";

function App() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_POST_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_POST_ERROR });
      });
  };
  return (
    <>
      <div className="App">
        <button onClick={handleFetch}>
          {state.loading ? "Loading..." : "Fetch Post"}
        </button>
        {state.error && <p>Something went wrong!</p>}
        {state.post && (
          <div className="post">
            <h2>{state.post.title}</h2>
            <p>{state.post.body}</p>
          </div>
        )}
      </div>
      <Form />
    </>
  );
}

export default App;
