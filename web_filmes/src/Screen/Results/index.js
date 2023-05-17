import React from 'react';
import '../Results/style.css'

const SearchResultsPage = ({ results }) => {
  return (
    <div>
      <h2>Resultados da Pesquisa</h2>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsPage;
