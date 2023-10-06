export const initialState = [
  {
    id:1,
    name: 'Lilith',
    age: 32,
    salary: 340_000
  },
  {
    id:2,
    name: 'Aramayis',
    age: 42,
    salary: 570_000
  },
  {
    id:3,
    name: 'Armen',
    age: 24,
    salary: 150_000
  },
  {
    id:4,
    name: 'Ani',
    age: 30,
    salary: 440_000
  },
  {
    id:5,
    name: 'Stepan',
    age: 36,
    salary: 420_000
  },
]


function reducer(state, action) {
  switch (action.type) {
    // case 'plus':return {count:state.count < 9 ? state.count+ 1:state.count}
    
    
    // case 'minus':return {count:state.count > 1 ? state.count - 1 : state.count}
    // case 'reset':return initialState
    
    case 'delete-user' : return deleteUser(state, action.payload.userid)
    case 'sort-by-name': return sortName(state)
    default:return state;


  }
}

function deleteUser(state, userid) {
  const result = state.filter(elem => elem.id !== userid)
  return result;
}
function sortName(state) {
 const result1 = state.toSorted((a,b) => a.name > b.name ? 1: -1) 
 return result1 
}

export default reducer