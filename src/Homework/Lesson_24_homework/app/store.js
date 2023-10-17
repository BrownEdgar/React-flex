import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import countSlice from "../features/count/countSlice";

const checkEmail = (store) => (next) => (action) =>{
  let isEmailExist = false
  if(action.type === "users/addUser"){
    const users = store.getState().users;
    isEmailExist = users.some(user => user.email === action.payload.newUser.email)
  }
  isEmailExist ? alert("this email is already exist") : next(action)
}

const addIdAndDate = () => (next) => (action) =>{
  if(action.type === "users/addUser"){
    action.payload.newUser.id = Math.random().toString(16).slice(2, 10);
    action.payload.newUser.date = new Date().toLocaleDateString()
  }
  next(action)
}

const store = configureStore({
  reducer: {
    users: usersSlice,
    count: countSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([checkEmail, addIdAndDate])
  }
})

export default store