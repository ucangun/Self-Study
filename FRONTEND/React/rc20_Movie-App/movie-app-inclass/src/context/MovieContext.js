import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContextt = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoding] = useState(false);

  const getMovies = (API_ADRESS) => {
    setLoding(true);
    axios
      .get(API_ADRESS)
      .then(({ data }) => setMovies(data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoding(false));
  };

  useEffect(() => {
    getMovies(BASE_URL);
  }, []);

  return (
    <MovieContextt.Provider value={{ movies, loading, getMovies }}>
      {children}
    </MovieContextt.Provider>
  );
};

export default MovieContext;
