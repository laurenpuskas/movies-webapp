import React, { useState, useEffect } from 'react';

const apiUrl = 'https://wookie.codesubmit.io/movies';

const requestOptions = {
  headers: { Authorization: 'Bearer Wookie2021' },
};

function App() {
  // set state for movies display
  const [movies, setMovies] = useState([]);

  // fetch api data
  useEffect(() => {
    async function fetchData() {
      await fetch(apiUrl, requestOptions)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setMovies(data.movies);
        })
        .catch((error) => {
          console.log('error: ' + error);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* backdrop, cast, classification, director, genres, id, imdb_rating,
      length, overview, poster, released_on, slug, title */}
      {movies.map((movie, index) => (
        <div key={index}>{movie.title}</div>
      ))}
    </div>
  );
}

export default App;
