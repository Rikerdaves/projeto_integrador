import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MovieCarousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '8a78bbc2059ae1af9b5db720e9ee991d',
          language: 'pt-BR',
          page: 1
        }
      });
      setMovies(response.data.results);
    }

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <h2>Filmes populares</h2>
      <Slider {...settings} style={{ width: '85%' , margin: '0 auto' }}>
        {movies.map((movie) => (
          <div key={movie.id} class='slide'>
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieCarousel;
