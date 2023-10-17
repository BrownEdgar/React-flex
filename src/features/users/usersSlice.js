import { createSlice } from "@reduxjs/toolkit";

const initialValues = [{
    id:1,
    name: "Willem",
    surname: "Dafoe",
    age: 68,
    email: "example@gmail.com"
}]

const usersSlice = createSlice({
    name: "users",
    initialState: initialValues,
    reducers: {
        addUser(state, action) {
            state.push(action.payload.person)
        }
    }
})

export default usersSlice.reducer
export const getUsers = (state) => state.users
export const { addUser } = usersSlice.actions