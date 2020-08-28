import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultsCard = ({ movie }) => {
  const { addMovietoWatchlist, watchlist } = useContext(GlobalContext);

  const storeMovie = watchlist.find(o => o.id === movie.id)

  const watchlistDisabled = storeMovie ? true : false


  return (
    <div>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-data">
              {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </h4>
          </div>

          <div className="controls">
            <button 
            disabled={watchlistDisabled}
            onClick={() => addMovietoWatchlist(movie)} className="btn">
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
