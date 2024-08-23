import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const [filmDetail, setFilmDetail] = useState("");
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_count,
    vote_average,
  } = filmDetail;

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const Image =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(() => {
    axios.get(movieDetailUrl).then((res) => setFilmDetail(res.data));
  }, [movieDetailUrl]);

  return (
    <div className="px-10 py-5 mx-auto md:container">
      <h1 className="text-3xl text-center dark:text-white">{title}</h1>

      <div className="flex justify-center px-10 md:container">
        <div className="flex flex-col max-w-6xl bg-gray-100 rounded-lg shadow-lg lg:flex-row">
          <img
            className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={poster_path ? baseImageUrl + poster_path : Image}
            alt="poster"
          />
          <div className="flex flex-col justify-between p-6">
            <div>
              <h5 className="mb-2 text-xl font-medium text-gray-900">
                Overview
              </h5>
              <p className="mb-4 text-base text-gray-700">{overview}</p>
            </div>
            <ul className="text-gray-900 bg-gray-100 border border-gray-400 rounded-lg">
              <li className="w-full px-6 py-2 border-b border-gray-400 rounded-t-lg">
                {`Release Date : ${release_date}`}
              </li>
              <li className="w-full px-6 py-2 border-b border-gray-400">
                {`Rate : ${vote_average}`}
              </li>
              <li className="w-full px-6 py-2 border-b border-gray-400">
                {`Total Vote: ${vote_count} `}
              </li>
              <li className="w-full px-6 py-2 border-gray-400 rounded-t-lg">
                <Link
                  to={-1}
                  className="mb-4 text-blue-600 transition duration-300 ease-in-out hover:text-blue-700"
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
