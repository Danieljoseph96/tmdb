import React, { useEffect, useState } from "react";
import "./CardGrid.css";
import Access_Token, { Api_Key, movie } from "../config/keys";

export default function CardsGrid() {
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const movieUrl = `${movie}/popular?page=${page}&api_key=${Api_Key}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(movieUrl, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Access_Token}`,
          },
        });

        const result = await response.json();

        setMoviesData(result.results || []);
        setTotalPages(result.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page]); // 👈 re-run when page changes

  return (
    <div className="cards-page">
      <h1 className="page-title">Popular Movies</h1>

      <div className="cards-grid">
        {moviesData.map((movie) => (
          <div key={movie.id} className="card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.title}
              className="movie-image"
            />
            <div className="card-content">
              <h2 className="card-title">{movie.title}</h2>
              <p className="rating">⭐ {movie.vote_average}</p>
              <p className="release">📅 {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          ⬅ Previous
        </button>

        <span> Page {page} </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
