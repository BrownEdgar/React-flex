import Navbar from "./Component/NavBar/Navbar";
import Home from './pages/Home'
import Blog from './pages/Blog'
import Err from './pages/Err'
import About from "./pages/About";
import Posts from "./pages/Posts";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import ROUTES from "./routes";
import Layouts from "./Component/Layouts";
export default function App(){
    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={ROUTES.HOME} element={<Layouts />}>
                <Route index element={<Home />}/>
                <Route path={ROUTES.BLOG} element={<Blog />}/>
                <Route path={ROUTES.ERROR_PAGE} element={<Err />}/>
                <Route path={ROUTES.ABOUT} element={<About />}/>
                <Route path={ROUTES.POSTS} element={<Posts />}/>
            </Route>
        )
    )

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}