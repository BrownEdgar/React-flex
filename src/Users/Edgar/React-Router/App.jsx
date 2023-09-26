import Navbar from './components/Navbar/Navbar'

import { Navigate, Route, Routes } from 'react-router-dom'
import { About, Blog, ErrorPage, Home } from './pages'
import ROUTES from './routes'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
      </Routes>

    </div>
  )
}
