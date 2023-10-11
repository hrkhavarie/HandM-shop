
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Applayout from './ui/Applayout'
import Home from './ui/Home'
// import ProductList , {loader as shopLoader} from './features/Products/ProductList'
import ProductDetails from './features/Products/ProductDetails'
import Product , {loader as shopLoader} from './features/Products/Product'


// const router = createBrowserRouter([
//   {
//     element:<Applayout/>,
//     children:[
//       { path: '/' ,  element: <Home/>} , 
//       { path: '/shop', element: <ProductList/>,loader: shopLoader }
//      ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Applayout/>}>
      <Route index element={<Home/>} errorElement={<Error/>}/>
      <Route path='shop' element={<Product/>} loader={shopLoader} errorElement={<Error/>} />
      <Route path='shop/:name' element={<ProductDetails/>} loader={shopLoader} errorElement={<Error/>} />

    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
