import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Cardmovie/style.css'

const MovieList = () => { 
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = '8a78bbc2059ae1af9b5db720e9ee991d';
  
  const getMovies = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
    return response.data.results;
  }

  const loadMovies = async () => {
    const newMovies = await getMovies(currentPage);
    setMovies([...movies, ...newMovies]);
  }

  const handleScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      setCurrentPage(currentPage + 1);
    }
  }
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  

  useEffect(() => {
    loadMovies();
  }, [currentPage]);

  return (
    <div class='content'>
      <h2>Filmes Populares</h2>
      <ul class="lista-colunas">
        {movies.map((movie) => (
          <><li key={movie.id}></li>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={`Poster do filme ${movie.title}`}/></>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
