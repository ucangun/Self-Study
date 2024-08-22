import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContextt = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoding] = useState(false);

  const getMovies = () => {
    setLoding(true);
    axios
      .get(BASE_URL)
      .then(({ data }) => setMovies(data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoding(false));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContextt.Provider value={{ movies, loading }}>
      {children}
    </MovieContextt.Provider>
  );
};

export default MovieContext;
