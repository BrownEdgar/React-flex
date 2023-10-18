import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Shop from "./Pages/Shop/Shop"
import Card from "./Pages/Card/Card"
import Layouts from "./Components/Layouts"
import { useState } from 'react'


export default function App() {
  const [localLength, setLocalLength] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<Layouts localLength={localLength} />}>
        <Route index element ={<Shop localLength={localLength} setLocalLength={setLocalLength}/>} />
        <Route path ="card" element = {<Card />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}
