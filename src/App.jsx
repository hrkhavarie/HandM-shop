
import {   RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Applayout from './ui/Applayout'
import Home from './ui/Home'
import Product , { loader as shopLoader } from './features/Products/Product'
import Error from './ui/Error'
import ProductDetails from './features/Products/ProductDetails'




const router = createBrowserRouter([
  {
    path:'/' , 
    element: <Applayout/>,
     children:[
      { path: '/' , index:true ,  element: <Home/> , errorElement: <Error/>} , 
      { path: '/shop', element: <Product/>, loader:shopLoader , errorElement: <Error/> },
      { path: '/pro', element: <ProductDetails/> , errorElement: <Error/> }
     ]


    // element:<Applayout/>,
    // children:[
    //   { path: '/' ,  element: <Home/> , errorElement: <Error/>} , 
    //   { path: '/shop', element: <Product/>, loader: shopLoader , errorElement: <Error/> },
    //   { path: '/pro', element: <ProductDetails/> , errorElement: <Error/> }
    //  ]
  }
])

function App() {

  return <RouterProvider router={router} />

  
}

export default App
