import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import { Home, Login } from '@/pages/index'
import Layout from '@/layout'

const router = createBrowserRouter([
  { path: "*", Component: Root },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router

function Root() {
  return (
     <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
