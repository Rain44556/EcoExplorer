import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import HomeLayout from './layouts/HomeLayout'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AuthProvider from './provider/AuthProvider'
import AdventureDetails from './pages/AdventureDetails'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Home from './components/Home'

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/adventure/:id",
        element:(<PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>),
        loader: () => fetch('/data.json')
      },
    ]
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/signup',
        element: <Signup></Signup>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
