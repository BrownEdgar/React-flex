import { createSlice } from '@reduxjs/toolkit'

const initialUsersValue = [
  "Anahit",
  "Lusine",
  "Karen",
  "Levon"
]

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersValue,
  reducers: {
    addUser: (state, action) => {
      if (!state.includes(action.payload.name)) {
        state.push(action.payload.name)
      }
    },
    deleteUser: (state, action) => {
      return state.filter(user => user !== action.payload.name)
    }
  }
})

export default usersSlice.reducer
export const { addUser, deleteUser } = usersSlice.actions;