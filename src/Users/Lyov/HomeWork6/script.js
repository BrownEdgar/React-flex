export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}



export default function reducer (state, {type, payload}) {
  switch (type) {
    case 'Add': return addPosts(state, payload )
    case 'Add-name': return addName(state, payload)
    default:return state;
  }
}
function addName() {
  
}


function addPosts(state, user) {
  return {
    actions: state.action + 1,
    posts: [...state.posts, user],
  }
}