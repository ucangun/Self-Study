"use client";
import Image from "next/image";
import React from "react";

const MovieCard = ({ id, vote_average, poster_path }) => {
  return (
    <div className="w-40 h-[240] cursor-pointer relative">
      <Image
        width={160}
        height={240}
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt={`poster of movie ${id}`}
      />

      <span className="absolute font-semibold text-white bottom-1 right-1">
        {vote_average}{" "}
      </span>
    </div>
  );
};

export default MovieCard;
