import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/home/home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import Details from './components/details/details';
import Error from './Error/Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/Donation",
        element: <Donation></Donation>
      },
      {
        path : "/Statistics",
        element:<Statistics></Statistics>,
        loader : ()=> fetch("/data.json")
      },
      {
        path : "/details/:id",
        element: <Details></Details>,
        loader :() => fetch("/data.json")
      },
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
