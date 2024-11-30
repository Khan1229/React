// src/components/Banner.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Obtener una película aleatoria de la API de TMDb
    axios
      .get('https://api.themoviedb.org/3/trending/all/week', {
        params: {
          api_key: 'YOUR_API_KEY',  // Reemplaza con tu API key
        },
      })
      .then((response) => {
        setMovie(
          response.data.results[Math.floor(Math.random() * response.data.results.length)]
        );
      });
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
