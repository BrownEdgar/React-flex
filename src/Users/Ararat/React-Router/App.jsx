import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useNavigate } from 'react-router-dom';
import { About, Contact, Home, Service } from './Content';
import ROUTES from './routes';
import Layouts from './Components/Layouts';
import './App.css';

function NotFound() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="not-found-container">
      <h2>404 - Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <button className = "container_btn" onClick={handleReturnHome}>Return to Home</button>
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SERVICE} element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


