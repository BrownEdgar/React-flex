import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";

const initialUsersValue = [
  {
    id: 1,
    name: "Tatev",
    surName: "Hakobyan",
    age: 26,
    email: "tatev.hakobyan1997@mail.ru"
  }
]

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersValue,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload.newUser)
    }
  }
})

export const getUsers = (state => state.users)

export default usersSlice.reducer
export const { addUser } = usersSlice.actions