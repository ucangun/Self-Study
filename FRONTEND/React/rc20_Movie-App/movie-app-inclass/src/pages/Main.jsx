import React, { useContext, useState } from "react";
import { MovieContextt } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const { movies, loading, getMovies } = useContext(MovieContextt);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + query);
  };

  return (
    <div>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="h-8 p-1 m-2 rounded-md w-80"
          placeholder="Search a movie..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>

      <div className="flex flex-wrap justify-center">
        {/* loading true ise (apiden veriler gelmeden önce) loading resmi görünsün, false olduğunda movies cardlar */}

        {loading ? (
          <div
            className="inline-block w-8 h-8 text-blue-600 border-4 rounded-full spinner-border animate-spin mt-52"
            role="status"
          >
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
};

export default Main;
