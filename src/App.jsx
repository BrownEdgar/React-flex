// import {useDispatch, useSelector} from 'react-redux'
// import { addUser, deleteUser } from './features/users/usersSlice'

// export default function App() {
//   const users = useSelector((state) => state.users)
//   const dispatch = useDispatch()
//   const handleDelete = () => {
//     dispatch(deleteUser({name: 'Karen'}))
//   }
//   return (
//     <div>
//       <h1>React-flex</h1>
//       <h2>{JSON.stringify(users, null, 1)}</h2>
//       <button onClick={() => dispatch(addUser({name: 'Valod'}))}>Add User</button>
//       <button onClick={handleDelete}>Delete Karen</button>
//     </div>
//   )
// }



import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducts, getProducts } from './features/products/productsSlice';

export default function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div>
      <button onClick={() => dispatch(deleteProducts({ id: 1 }))}>Delete product N1</button>
      <pre>
        {JSON.stringify(products, null, 1)}
      </pre>
    </div>
  )
}