import { configureStore } from '@reduxjs/toolkit';
import CommentSlice from '../features/comments/CommentSlice';
import selectComment from '../features/comments/selectComment/selectComment';




const store = configureStore({
  reducer: {
    comments: CommentSlice,
    select: selectComment
  }
})

export default store