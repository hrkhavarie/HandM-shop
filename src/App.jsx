
import {  RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Applayout from './ui/Applayout'
import Home from './ui/Home'
import Product , {loader as shopLoader} from './features/Products/Product'
import Error from './ui/Error'


const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      { path: '/' ,  element: <Home/> , errorElement: <Error/>} , 
      { path: '/shop', element: <Product/>,loader: shopLoader , errorElement: <Error/> }
     ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Applayout/>}>
//       <Route index element={<Home/>} errorElement={<Error/>}/>
//       <Route path='shop' element={<Product/>} loader={shopLoader} errorElement={<Error/>} />
//       <Route path='shop/:name' element={<ProductDetails/>} loader={shopLoader} errorElement={<Error/>} />

//     </Route>
//   )
// )
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
