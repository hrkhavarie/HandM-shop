import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "./Navbar"
import Loader from "./Loader";

const Applayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading'
    // console.log('state' ,navigation.state);
  return (
   <>
  
    <div className="container-fluid">
    {
            isLoading && <Loader/>
        }
        <div className="row">
          <Navbar  />
        </div>
        
        <main>
          

            <Outlet/>
          
        </main>
    </div>
   </>
  )
}

export default Applayout