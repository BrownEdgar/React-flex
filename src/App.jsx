import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { delteProducts, getProducts } from './features/products/ProductSlice';


export default function App() {
  const products = useSelector((state) => state.products)
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getProducts())
  }, [])


  return (
    <div>
      <button onClick={() => dispath(delteProducts({ id: 1 }))}>Delete product N1</button>
      <pre>
        {JSON.stringify(products, null, 1)}
      </pre>
    </div>
  )
}

