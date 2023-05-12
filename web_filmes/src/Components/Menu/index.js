import '../Menu/style.css'
import SearchBar from '../Searchbar';
import { Link } from 'react-router-dom';


function Menu() {
    return(
      <div class="navbar">
        <nav>
          <ul>
            <li><Link to="/">Ínicio</Link></li>
            <li><Link to="/Movies">Filmes</Link></li>
            <li><Link to="/Series">Series</Link></li>

            <li><SearchBar/></li>
          </ul>
        </nav>
      </div>
    );
  }

export default Menu;  