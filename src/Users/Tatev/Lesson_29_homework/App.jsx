import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import About from "./Pages/About"
import Layouts from "./Components/Layouts"
import Error from "./Pages/Error"
import "./App.scss"



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Layouts/>}>
        <Route index element = {<About/>}/>
        <Route path="error" element = {<Error/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )
}