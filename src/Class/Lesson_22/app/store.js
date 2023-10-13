import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../feauters/users/usersSlice"
import todosReducer from "../feauters/todos/todosSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer
  }
})

export default store