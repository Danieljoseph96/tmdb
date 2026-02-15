import React, { useEffect, useState } from "react";
import "./CardGrid.css";
import Access_Token, { Api_Key, movie } from "../config/keys";
import { useNavigate } from "react-router-dom";

export default function CardsGrid({ searchQuery }) {
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const url = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&query=${encodeURIComponent(
            searchQuery
          )}&page=${page}`
        : `${movie}/popular?page=${page}&api_key=${Api_Key}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${Access_Token}`,
        },
      });

      const result = await response.json();

      setMoviesData(result.results || []);
      setTotalPages(result.total_pages || 0);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch movies whenever page or searchQuery changes
  useEffect(() => {
    fetchMovies();
  }, [page, searchQuery]);

  return (
    <div className="cards-page">
      <h1 className="page-title">
        {searchQuery ? `Search Results for "${searchQuery}"` : "Popular Movies"}
      </h1>

      <div className="cards-grid">
        {moviesData.map((movie) => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/video/${movie.id}`)}
          >
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

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
}
