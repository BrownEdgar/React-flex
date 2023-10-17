import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/users/usersSlice'


const checkname = (store) => (next) => (action) => {
  let isActorExist = false
  if (action.type === 'users/addUser') {
    const users = store.getState().users;
    isActorExist = users.some(elem => elem.fullName.toLowerCase() === action.payload.person.fullName.toLowerCase());
  }
  isActorExist ? alert('Users already exist') : next(action)
}

const addIdAddRole = () => (next) => (action) => {
  if (action.type === 'users/addUser') {
    action.payload.person.id = Math.random().toString(16).slice(2, 10);
    action.payload.person.role = 'actor'
  }
  next(action)
}

const store = configureStore({
  reducer: {
    users: usersSlice,
    
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([checkname, addIdAddRole])
  }
})



export default store