import { createSlice } from "@reduxjs/toolkit";

const initialUsersValue = [
  { id: 1, fullName: 'Bruce Li', age: 34, role: 'actor', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDEMsZVwmBXLxjhrYOomvtFZrIMHfm050QjsjKijUzydwIL8AY' }
]

const userSlice = createSlice({
  name: 'users',
  initialState: initialUsersValue,
  reducers: {
    addUser(state, action) {
      state.push(action.payload.person)
    }
  }
})


export const selectAllUsers = (state) => state.users;
export default userSlice.reducer
export const { addUser, deleteUser } = userSlice.actions