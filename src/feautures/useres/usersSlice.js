import { createAction, createSlice } from "@reduxjs/toolkit"

const initalUsersValue = [
    {
        id: 1,
        fullName: 'Van Dam',
        age: 67,
        role: 'actor',
        image: 'https://media.baselineresearch.com/images/90131/90131_full.jpg'
    }
]


const usersSlice = createSlice({
    name: 'users',
    initialState: initalUsersValue,
    reducers: {
        addUser(state, action) {
            console.log(action);
            state.push(action.payload.person)
        }
    }
})

export const selectAllUsers = (state) => state.users;

export const {addUser} = usersSlice.actions
export default usersSlice.reducer