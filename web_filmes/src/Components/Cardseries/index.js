import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Cardseries/style.css'

const SerieList = () => { 
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = '8a78bbc2059ae1af9b5db720e9ee991d';
  
  const getSeries = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`);
    return response.data.results;
  }

  const loadSeries = async () => {
    const newSeries = await getSeries(currentPage);
    setSeries([...series, ...newSeries]);
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
    loadSeries();
  }, [currentPage]);

  return (
    <div className='content'>
      <h2>Series Populares</h2>
      <ul className="lista-colunas">
        {series.map((serie) => (
          <><li key={serie.id}></li>
          <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} 
          alt={`Poster do filme ${serie.title}`}/></>
        ))}
      </ul>
    </div>
  );
};

export default SerieList;
