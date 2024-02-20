import { useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { IconContext } from 'react-icons';

function Homeview() {
  const [heartStates, setHeartStates] = useState(new Array(6).fill('empty'));

  // Fonction pour basculer entre 'empty' et 'full' pour un cardItem spécifique
  const toggleHeart = (index) => {
    setHeartStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = prevStates[index] === 'empty' ? 'full' : 'empty';
      return newStates;
    });
  };

  // Fonction pour générer les éléments
  const generateCardItems = () => {
    const cardItems = [];
    for (let i = 0; i < 6; i++) {
      cardItems.push(
        <div key={i} className="card-item-container">
          <div className="bg-img"></div>
          <div className="legend">
            <h3>Tarte au citron meringuée maison</h3>
            <button className={heartStates[i] === 'empty' ? 'empty-heart' : 'full-heart'} onClick={() => toggleHeart(i)}>
              <IconContext.Provider value={{ color: 'red', size: '2em' }}>
                {heartStates[i] === 'empty' ? <IoMdHeartEmpty /> : <IoMdHeart />}
              </IconContext.Provider>
            </button>
          </div>
        </div>
      );
    }
    return cardItems;
  };

  return (
    <div className="homeview-grid-container">
      <h1>Découvrez nos nouvelles recettes</h1>
      <div className="homeview-container">{generateCardItems()}</div>
    </div>
  );
}

export default Homeview;
