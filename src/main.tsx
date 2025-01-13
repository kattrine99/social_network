import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/base.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage, MainPage, ProfilePage, RegistrationPage } from "./pages";
import App from './App';

const routerConfig = createBrowserRouter([
  { path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/register",
    element: <RegistrationPage/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}></RouterProvider>
  </React.StrictMode>,
)
