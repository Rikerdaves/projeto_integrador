import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SeriesCarousel() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchSeries() {
      const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          api_key: '8a78bbc2059ae1af9b5db720e9ee991d',
          language: 'pt-BR',
          page: 1
        }
      });
      setSeries(response.data.results);
    }

    fetchSeries();
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
      <h2>Series populares</h2>
      <Slider {...settings} style={{ width: '85%' , margin: '0 auto' }}>
        {series.map((serie) => (
          <div key={serie.id} class='slide'>
            <img src={`https://image.tmdb.org/t/p/w185${serie.poster_path}`} alt={serie.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SeriesCarousel;
