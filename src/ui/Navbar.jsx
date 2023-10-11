import { Link } from "react-router-dom"

const Navbar = () => {

  
  return (
    <div className="hm-navbar">  
   
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light hm-navbar">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src="/images/hm-logo.png" className="logo img-fluid" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"><i className="bi bi-house"></i>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/shop"  data-bs-toggle="dropdown" >
          <i className="bi bi-basket"></i> Shop
          </Link>
          <ul className="dropdown-menu">
          <li className="nav-item">
          <Link className="dropdown-item" to="/shop"><i className="bi bi-men"></i> Men Colloction</Link>
        </li>
        <li><hr className="dropdown-divider"/></li>

        <li className="nav-item">
          <Link className="dropdown-item" to="/shop">Women Colloction</Link>
        </li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/shop">Kids Colloctions</Link></li>
          </ul>
        </li>
       
       

       
        <li className="nav-item">
          <Link className="nav-link" to="/shop"><i className="bi bi-percent"></i> Off collection</Link>
        </li>



       
        
      </ul>
      <div className="float-lg-end float-sm-start">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="/cart"><i className="bi bi-bag-check"></i>Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/user"><i className="bi bi-person"></i>Profile</Link>
        </li>
        </ul>

        
</div>
     
    </div>
  </div>
</nav>

</div>


  )
}

export default Navbar