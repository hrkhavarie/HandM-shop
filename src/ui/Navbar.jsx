const Navbar = () => {

  
  return (
    <div className="hm-navbar">  
   
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light hm-navbar">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src="/images/hm-logo.png" className="logo img-fluid" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/"><i className="bi bi-house"></i>Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/shop"  data-bs-toggle="dropdown" >
          <i className="bi bi-basket"></i> Shop
          </a>
          <ul className="dropdown-menu">
          <li className="nav-item">
          <a className="dropdown-item" href="/shop"><i className="bi bi-men"></i> Men Colloction</a>
        </li>
        <li><hr className="dropdown-divider"/></li>

        <li className="nav-item">
          <a className="dropdown-item" href="/shop">Women Colloction</a>
        </li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/shop">Kids Colloctions</a></li>
          </ul>
        </li>
       
       

       
        <li className="nav-item">
          <a className="nav-link" href="/shop"><i className="bi bi-percent"></i> Off collection</a>
        </li>



       
        
      </ul>
      <div className="float-lg-end float-sm-start">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/"><i className="bi bi-bag-check"></i>Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/"><i className="bi bi-person"></i>Profile</a>
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