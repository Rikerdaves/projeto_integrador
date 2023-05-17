import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../PageMovie/style.css'

const DetalhesFilme = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const apiKey = '8a78bbc2059ae1af9b5db720e9ee991d';

    const fetchFilme = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`);
        setFilme(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFilme();
  }, [id]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  const { title, overview, poster_path } = filme;

  return (
    <div className="container">
      <div className="image">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster do filme ${title}`} className="poster" />
      </div>
      <div className="text">
        <h2 className="title">{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default DetalhesFilme;
