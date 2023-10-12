import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteProducts, getPorducts } from "./feauters/products/ProductsSlice"


export default function App() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPorducts())
  },[])

  return (
    <div>
      <button onClick={() => dispatch(deleteProducts({id: 1}))}>Delete product number 1</button>
      <pre>
        {JSON.stringify(products, null, 1)}
      </pre>
    </div>
  )
}
