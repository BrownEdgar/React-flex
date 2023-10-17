import { configureStore } from "@reduxjs/toolkit"
import commentsSlice from "../features/comments/commentsSlice"
import usersSlice from "../features/users/usersSlice"
import countSlice from "../features/countSlice/countSlice";


const checkEmail = (store) => (next) => (action) => {
  let isEmailExist = false;
  if (action.type === "users/addUser") {
    const users = store.getState().users;
    isEmailExist = users.some((user) => user.email === action.payload.person.email)
  }
  isEmailExist ? alert("User already exists") : next(action)
}



const addIdAndDate = () => (next) => (action) => {
  if (action.type === "users/addUser") {
    action.payload.person.id = Math.random().toString(16).slice(2, 10)
    action.payload.person.date = new Date().toDateString()
  }
  next(action)
}

// const countMiddleware = (store) => (next) => (action) => {
//   if (action.type === 'users/addUser') {
//     store.dispatch(increment());
//   }
//   next(action)
// }

const store = configureStore({
  reducer: {
    comments: commentsSlice,
    users: usersSlice,
    count: countSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([checkEmail, addIdAndDate]);
  },
})

export default store