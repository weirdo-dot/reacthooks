// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 8.8
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s",
      rating: 8.7
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
    );
  });

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: "New Movie",
        description: "Description of the new movie.",
        posterURL: "https://example.com/new-movie.jpg",
        rating: 7.5
      })}>Add New Movie</button>
    </div>
  );
};

export default App;
