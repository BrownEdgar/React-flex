export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
  }

function reducer(state, {type, payload}) {
    switch (type) {
        case "show-posts":
            return showPosts(state, payload.data);
        case "add-dev":
            return addDev(state, payload.inpValue)
        case "sort":
            return sortArr(state);
        case "change-id":
            return changeId(state)
        case "delete-post":
            return deletePost(state)
    }
}

function showPosts(state, payload) {
    const result = [...payload]
    return {
        ...state,
        posts:result,
        actions: state.actions + 1
    }
}

function addDev(state, payload) {
    if (state.developers.includes(payload.toLowerCase()) || payload === "") {
        return {...state}
    } else {
    return {
        ...state,
        developers:[...state.developers, payload],
        actions: state.actions + 1
        }
    }
}

function sortArr(state) {
    const result = state.arr.sort(() => Math.random() - 0.5);
    return { ...state, arr: result, actions: state.actions + 1}
}

function changeId(state) {
    const result = state.posts.map((post, index) => {
        return {...post, id: state.arr[index]};
    });
    return {...state, posts: result}
}

function deletePost(state, id) {
    const result = state.filter(post => {post.id !== id})
    return {...state, posts:result}
}

export default reducer;