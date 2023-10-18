import { configureStore, isAction } from "@reduxjs/toolkit";
import usersSlice from "../feautures/useres/usersSlice";


const checkName = (store) => (next) => (action) => {
    console.log('checkName...');
    let isActorExist = false;
    if(action.type === 'users/aaddUser'){
        const users = store.getState().users;
        isActorExist = users.some(elem => elem.fullName.toLowerCase() === action.payload.person.fullName.toLowerCase());
    }
    isActorExist ? alert("user alredy exist") : next(action)
}

const addIdAddRole = () => (next) => (action) => {
    if(action.type === 'users/addUser'){
        action.payload.person.id = Math.random().toString(16).slice(2,10)
        action.payload.role = 'actor'
    }
    next(action)
}


const addCountMiddleware = (store) => (next) => (action) => {
    if(action.type === 'users/addUser'){
        const dispach = store.dispach()
        dispach(increment())
    }
    next(action)
}

const store = configureStore({
    reducer: {
        users: usersSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([checkName], addIdAddRole)
    }
})

export default store