


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
import LaptopCategory from './components/LaptopCategory/LaptopCategory'
import PhoneCategeory from './components/PhoneCategeory/PhoneCategeory'
import AcceCatageory from './components/AcceCatageory/AcceCatageory'
import SmartWatch from './components/SmartWatch/SmartWatch'
import Iphn from './components/iphn/Iphn'
import ViewAddedCard from './components/ViewAddedCard/ViewAddedCard'
// import PhoneCategeory from './components/PhoneCategeory/PhoneCategeory'

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
        path:'gadets/:category',
        element:<LaptopCategory></LaptopCategory>,
       
      },
      {
        path:'phones/:category',
        element:<PhoneCategeory></PhoneCategeory>,
      
        
      },
      {
       path:'accessories/:category',
       element:<AcceCatageory></AcceCatageory>
      },
      {
        path:'smartWatch/:category',
        errorElement:<SmartWatch></SmartWatch>
      },
      {
        path:'iphone/:category',
        element:<Iphn></Iphn>
      },
      {
        path:'ViewAddedCard',
        element:<ViewAddedCard></ViewAddedCard>
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
