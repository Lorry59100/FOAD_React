import logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <button className='bars-btn'><i className="fa-solid fa-bars fa-2x"></i></button>
        <img src={logo} alt="logo" />
      </div>
        <div className="navbar-buttons-container">
            <button className='btn-primary'><i className="fa-solid fa-cart-shopping"></i> Panier</button>
            <button className='btn-primary'>Connexion</button>
        </div>
    </div>
  )
}

export default Navbar