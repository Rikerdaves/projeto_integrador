import '../Menu/style.css'
import SearchBar from '../Searchbar';
import { Link } from 'react-router-dom';
import React from 'react';


function Menu() {
  
    return(
      <div className="navbar">
        <nav>
          <ul>
            <li><Link to="/">Ínicio</Link></li>
            <li><Link to="/Movies">Filmes</Link></li>
            <li className='btn-series'><Link to="/Series">Series</Link></li>

            <li><SearchBar /></li>
          </ul>
        </nav>
      </div>
    );
  }

export default Menu;  