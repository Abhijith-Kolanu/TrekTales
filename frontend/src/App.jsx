import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup'
import { Provider } from 'react-redux'
import Login from './components/Login'
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import Profile from './components/Profile'
// import store from './store'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
