import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import Searchbar from './Searchbar';

function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Fonction pour basculer la visibilité du menu
  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <button className="bars-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-bars fa-2x"></i>
        </button>
        <img src={logo} alt="logo" />
      </div>

      {isMenuVisible && (
        <div className="navbar-menu-container">
          {/* Contenu du menu */}
          <button className="menu-item">Menu Item 1</button>
          <button className="menu-item">Menu Item 2</button>
          <button className="menu-item">Menu Item 3</button>
          <button className="menu-item">Menu Item 4</button>
        </div>
      )}
      <Searchbar/>

      <div className="navbar-buttons-container">
        <button className="btn-primary">
          <i className="fa-solid fa-cart-shopping"></i> Panier
        </button>
        <button className="btn-primary">Connexion</button>
      </div>
    </div>
  );
}

export default Navbar;
