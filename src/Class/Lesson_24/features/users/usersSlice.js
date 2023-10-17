import { createSlice } from "@reduxjs/toolkit";

const initialUsersValue = [
  {
    id: 1,
    fullName: "Bruce Li",
    age: 34,
    role: "actor",
    image: "https://wallpapercosmos.com/cdn-cgi/image/width=800,quality=60,format=auto/w/full/f/b/5/375758-1920x1080-desktop-1080p-bruce-lee-wallpaper-image.jpg"
  }
]


const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersValue,
  reducers: {
    addUser(state, action){
      state.push(action.payload.person)
    }
  }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
export const {addUser} = usersSlice.actions