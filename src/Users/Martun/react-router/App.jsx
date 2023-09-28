import Navbar from "./Component/NavBar/Navbar";
import Home from './pages/Home'
import Blog from './pages/Blog'
import Err from './pages/Err'
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
export default function App(){
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />}/>
                <Route path={ROUTES.BLOG} element={<Blog />}/>
                <Route path={ROUTES.ERROR_PAGE} element={<Err />}/>
                <Route path={ROUTES.ABOUT} element={<About />}/>
            </Routes>
        </div>
    )
}