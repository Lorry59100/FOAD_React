import logo from '../../assets/images/logo.png';
function Footer() {
  return (
    <div className="footer-container">
      <h2>2024 - © Cooke Formation CDA : Tous droits réservés</h2>
      <div className="cutline"></div>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Footer