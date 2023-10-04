export const initialState = {
  data: [],
  action: 0,
  status: 'idle'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'add-user': return addUser(state, payload)
    default: return state;
  }
}

function addUser(state, user) {
  return {
    ...state,
    data: [...state.data, user]
  }
}


function deleteUser(state, userid) {
  const result = state.filter(elem => elem.id !== userid);
  return result;
}

function sorteduser(state) {
  const result = state.toSorted((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  return result;
}

export default reducer