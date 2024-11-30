// src/components/MovieRow.js
import React from 'react';
import './MovieRow.css';

function MovieRow({ title, movies }) {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="movieRow__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
