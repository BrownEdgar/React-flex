import { createSlice } from "@reduxjs/toolkit"

const initalUsersValue = [
    'Anahit',
    'Luse',
    'Karen',
    'Levon'
]

const usersSlice = createSlice({
    name: 'users',
    initialState: initalUsersValue,
    reducers: {
        addUser: (state, action) => {
            if(state.includes(action.payload.name)){
                null
            }else(
                state.push(action.payload.name)
            )
        },
        deleteUser: (state, action) => {
            return state.filter(user => user !== action.payload.name)
        }
    }
})

export const {addUser, deleteUser} = usersSlice.actions
export default usersSlice.reducer