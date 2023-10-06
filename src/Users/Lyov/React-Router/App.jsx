import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { About, Blog, ErrorPage, Home, } from './pages'
import ROUTES from './routes'
import Layouts from './components/Navbar/Layouts'
import { postLoader, Posts,} from './pages/Posts'
import Post from './pages/Post'



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.POSTS} element={<Posts />} loader={postLoader} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
      </Route>
    )
  )


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
