import React, { useContext } from "react";
import { AuthContextt } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, overview, poster_path, vote_average, id }) => {
  const { currentUser } = useContext(AuthContextt);
  const navigate = useNavigate();
  return (
    <div
      className="movie"
      id="container"
      onClick={() => navigate(`details/${id}`)}
    >
      {/* img için base adrese endpoint olaraka dizideki poster_path eklenecek */}
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt="movie-card"
      />
      <div className="flex justify-between p-1 text-white align-baseline">
        <h5>{title}</h5>

        {/* kullanıcı login, register yada google ile giriş yaptıysa, AuthContext te currentUser oluşuyor, giriş yapıldıysa vote_average yi görebilsin */}

        {currentUser && (
          <span
            className={`tag ${
              vote_average > 7 ? "green" : vote_average > 6.8 ? "orange" : "red"
            }`}
          >
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
