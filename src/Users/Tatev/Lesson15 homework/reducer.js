
export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

function reducer(state, action) {
  switch(action.type){
    case "add-posts": return addPosts(state, action.payload)
    case "add-users": return addUsers(state, action.payload)
    case "shuffle": return shufflearr(state)
    case "replace-id-to-arrIndex": return replaceId(state)
    case "delete-post": return deletePost(state, +action.payload)
    default: return state
  }
}

function addPosts(state, payload){
  const result = [...payload]
  return {
    ...state,
    posts: result,
    actions: state.actions +1
  }
}

function addUsers(state, name){
  if(state.developers.includes(name.toLowerCase()) || name===""){
    return {...state}
  }else{
    return {...state, developers: [...state.developers, name], actions: state.actions + 1}
  }
}

function shufflearr(state){
  const result = state.arr.sort(() => Math.random() - 0.5)
  return {...state, arr: result, actions: state.actions + 1}
}

function replaceId(state){
  const result = state.posts.map((post, index) => {
    return (
      {...post, id: state.arr[index]}
    )
  })
  return {...state, posts: result}
}

function deletePost(state, id){
  const result=state.posts.filter(post => post.id !== id)
  return {...state, posts: result}
}

export default reducer