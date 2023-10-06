import { ADD_DEV, CHANGE_ID, DELETE_POST, SHOW_POSTS, SORT_POSTS } from './actionTypes';

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

function reducer(state, { type, payload }) {
  switch (type) {
    case SHOW_POSTS:
      return showPosts(state, payload.data);
    case ADD_DEV:
      return addDev(state, payload.inputValue)
    case SORT_POSTS:
      return sortArr(state);
    case CHANGE_ID:
      return changeId(state)
    case DELETE_POST:
      return deletePost(state, payload)
  }
}

function showPosts(state, payload) {
  const result = [...payload]
  return {
    ...state,
    posts: result,
    actions: state.actions + 1
  }
}

function addDev(state, payload) {
  if (state.developers.includes(payload.toLowerCase()) || payload === "") {
    return { ...state }
  } else {
    return {
      ...state,
      developers: [...state.developers, payload],
      actions: state.actions + 1
    }
  }
}

function sortArr(state) {
  const result = state.arr.sort(() => Math.random() - 0.5);
  return { ...state, arr: result, actions: state.actions + 1 }
}

function changeId(state) {
  const result = state.posts.map((post, index) => {
    return { ...post, id: state.arr[index] };
  });
  return { ...state, posts: result }
}

function deletePost(state, id) {
  console.log(id)
  const result = state.posts.filter(post => post.id != id);
  console.log(result)
  return { ...state, posts: result }
}

export default reducer;