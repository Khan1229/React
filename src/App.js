// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Obtener películas populares de la API de TMDb
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '6cd0c24690926f6898e42708ac33777b',  // Reemplaza con tu clave API
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="app__rows">
        <MovieRow title="Popular Movies" movies={movies} />
      </div>
    </div>
  );
}

export default App;
