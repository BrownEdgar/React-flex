import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../features/comments/commentsSlice";

const store = configureStore({
  reducer: {
    comments: commentsSlice,
  },
});

export default store;
