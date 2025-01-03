import React from "react";
import { getMovies, getVideoKey } from "@/helpers/movieFunctions";

const MovieSection1 = async () => {
  const films = await getMovies("now_playing");

  const videoKey = await getVideoKey(films[5].id);

  return (
    <div className="relative h-[50vw]">
      <div className="w-10/12 mx-auto lg:w-full">
        <div
          className="relative w-full overflow-hidden embed-responsive embed-responsive-16by9"
          style={{ paddingTop: "50%" }}
        >
          <iframe
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full embed-responsive-item"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="absolute top-[30%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {films[5].title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {films[5].overview}
        </p>
      </div>
    </div>
  );
};

export default MovieSection1;
