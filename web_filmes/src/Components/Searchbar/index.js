import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Searchbar/style.css'

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=8a78bbc2059ae1af9b5db720e9ee991d&query=${query}`
      );
      onSearchResults(response.data.results);
      navigate('/results'); // Navega para a página de resultados
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o nome de um filme..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
