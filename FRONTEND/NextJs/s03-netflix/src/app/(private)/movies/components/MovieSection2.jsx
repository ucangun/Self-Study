import React from "react";
import { getMovies } from "@/helpers/movieFunctions";
import MovieCard from "./MovieCard";

const MovieSection2 = async ({ title, type }) => {
  const films = await getMovies(type);

  return (
    <div className="mb-4">
      <p className="mb-4 font-semibold text-white text-md lg:text-2xl">
        {title}
      </p>

      <div className="grid grid-flow-col gap-2 overflow-x-scroll">
        {films?.map((film) => (
          <MovieCard key={film.id} {...film} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection2;
