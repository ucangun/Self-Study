import React from "react";
import { getVideoKey } from "@/helpers/movieFunctions";

const MovieDetail = async ({ params: { movieId } }) => {
  console.log(movieId);

  const videoKey = await getVideoKey(movieId);

  return (
    <div>
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
    </div>
  );
};

export default MovieDetail;
