import { createSlice } from "@reduxjs/toolkit"

const initialUsersValue = [
  'Anahit',
  'Lusine',
  'Karen',
  'Levon'
]
const usersSliec = createSlice({
  name: 'users',
  initialState: initialUsersValue,
  reducers: {
    addUser: (state, action) => {
      // state.push(action.payload.name)
      if (!state.includes(action.payload.name)) {
        return [...state, action.payload.name]
        // state.push(action.payload.name)
      }
    },
    deleteUser: (state, action) => {
      return state.filter(user => user !== action.payload.name)
    }
  }
})
export default usersSliec.reducer
export const { addUser, deleteUser } = usersSliec.actions


