import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./feautures/products/productsSlice"

export default function App() {
  const products = useSelector((state) => state.products)
  const dispach = useDispatch()
  useEffect(() => {
    dispach(getProducts())
  }, [])

  return (
    <div>
     {JSON.stringify(products, null, 1)} 
    </div>
  )
}