import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { About, Blog, ErrorPage, Home, Posts } from './pages'
import ROUTES from './routes'
import Post from './pages/Post'
import Layouts from './components/Layouts'


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
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
