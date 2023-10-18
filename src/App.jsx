import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layouts, Shop, Card } from "./Components";
import "./App.scss";

export default function App() {
  const [lengthOfItems, setLengthOfItems] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts itemLength={lengthOfItems} />}>
        <Route
          index
          element={
            <Shop itemLength={lengthOfItems} setLength={setLengthOfItems} />
          }
        />
        <Route path="/card" element={<Card />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
