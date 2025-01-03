import React from "react";
import MovieSection1 from "./components/MovieSection1";
import MovieSection2 from "./components/MovieSection2";

const Movies = () => {
  return (
    <div>
      <MovieSection1 />
      <MovieSection2 title="Top Rated" type="top_rated" />
      <MovieSection2 title="Upcoming" type="upcoming" />
      <MovieSection2 title="Popular" type="popular" />
      <MovieSection2 title="Now Playing" type="now_playing" />
    </div>
  );
};

export default Movies;
