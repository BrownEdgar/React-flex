import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layouts from './components/Layouts';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<Layouts/>}>
        <Route index element ={<Home/>} />
        <Route path ="add" element = {<Form />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
