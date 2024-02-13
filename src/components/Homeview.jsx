import tarte from '../assets/images/tarte_au_citron_meringuée.png'
function Homeview() {

  // Fonction pour générer les éléments
  const generateCardItems = () => {
    const cardItems = [];
    for (let i = 0; i < 6; i++) {
      cardItems.push(
        <div key={i} className="card-item-container">
          <img src={tarte} alt={`tarte-${i + 1}`} />
          <h3>Tarte au citron meringuée maison</h3>
        </div>
      );
    }
    return cardItems;
  };

  return (
<div className='homeview-grid-container'>
    <h1>Découvrez nos nouvelles recettes</h1>
      <div className="homeview-container">
        {generateCardItems()}
      </div>
</div>    
  )
}

export default Homeview