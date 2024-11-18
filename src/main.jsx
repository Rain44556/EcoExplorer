import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import HomeLayout from './layouts/HomeLayout'
import AdventureCards from './pages/AdventureCards'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <AdventureCards></AdventureCards>,
        loader: ()=> fetch('adventure.json')
      }
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
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
