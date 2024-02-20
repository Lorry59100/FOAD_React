import { FaSearch } from "react-icons/fa";
import { IconContext } from 'react-icons';
function Searchbar() {
  return (
    <div className="searchbar-container">
        <input className="searchbar" type="text" />
        <button className="search-icon">
            <IconContext.Provider value={{ color: 'grey', size: '1.4em' }}>
                <FaSearch />
            </IconContext.Provider>
        </button>
    </div>
  )
}

export default Searchbar