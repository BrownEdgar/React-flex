import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../features/users/usersSlice';
import todosSlice from '../features/todos/todosSlice';

// //  {
//   getState
//   dispatch
// }
const checkName = (store) => (next) => (action) => {
  console.log('checkName...')
  let isActorExist = false;
  if (action.type === 'users/addUser') {
    const users = store.getState().users;
    isActorExist = users.some(elem => elem.fullName.toLowerCase() === action.payload.person.fullName.toLowerCase());
  }
  isActorExist ? alert("user alredy exist") : next(action)
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
    todos: todosSlice
  },
  middleware: [checkName, addIdAddRole]
})

export default store