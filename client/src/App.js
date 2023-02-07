import React from 'react';
import{createBrowserRouter,createRoutesFromElements,Route, Link,Outlet, RouterProvider} from 'react-router-dom';
import {Home} from "./pages/home/Home.jsx";
import { Hotel } from './pages/hotel/Hotel.jsx';
import { List } from './pages/list/List.jsx';

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Route>
    )
  )
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}
const Root=()=>{
  return (
  <> 
  <div>
    <Outlet />
  </div>
  </>
  )
}

export default App;
