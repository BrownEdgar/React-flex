import { addUser } from './userSlice';
import { increment } from './countSlice';

const checkDuble = (store) => (next) => (action) => {
  if (action.type == addUser.type) {
    const { email } = action.payload;
    const { users } = store.getState().user;

    if (users.some((user) => user.email === email)) {
      console.log('User with this email already exists!');
    } else {
      action.payload.id = String(Date.now());
      action.payload.date = new Date().toString();
      next(action);
      store.dispatch(increment());
    }
  } else {
    next(action);
  }
};

export default checkDuble;
