import { createSlice } from "@reduxjs/toolkit"

const initialUsersValue = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]

const todosSlice = createSlice({
  name: "todos",
  initialState: initialUsersValue,
  reducers: {
    deleteArr: (state, action) => {
      state.length = 0
    }
  }
})

export default todosSlice.reducer
export const {deleteArr} = todosSlice.actions