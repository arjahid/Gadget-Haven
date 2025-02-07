


import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
import Root from './components/Root/Root'
import Statistic from './components/Statistic/Statistic'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import Dashboard from './components/DashBoard/Dashboard'
import ViewDetails from './components/ViewDetails/ViewDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'gadet/:product_id',
        element:<ViewDetails></ViewDetails>,
        loader:()=>fetch('/data.json')
      },
      {
        path:'statistic',
        element:<Statistic></Statistic>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
