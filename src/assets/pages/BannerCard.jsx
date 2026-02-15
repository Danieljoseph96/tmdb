import Navbar from "./Navbar";
import "./BannerCard.css";
import Access_Token, { Api_Key, movie } from "../config/keys";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BannerCard() {
  const [movieBanner, setMovieBanner] = useState(null);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieBanner = async () => {
      try {
        const randomPage = Math.floor(Math.random() * 20) + 1;

        const response = await fetch(
          `${movie}/popular?page=${randomPage}&api_key=${Api_Key}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${Access_Token}`,
            },
          }
        );

        const data = await response.json();

        if (!data.results || data.results.length === 0) return;

        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];

        // Fade transition
        setFade(true);
        setTimeout(() => {
          setMovieBanner(randomMovie);
          setFade(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    fetchMovieBanner();

    const interval = setInterval(fetchMovieBanner, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, []);

  // 🔒 Safe Loading Screen
  if (!movieBanner) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">
        Loading banner...
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-screen text-white transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundImage: movieBanner.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movieBanner.backdrop_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="relative z-10">
        <Navbar />

        <div className="flex items-center min-h-[80vh] px-6 md:px-16">
          <div className="max-w-2xl space-y-6">

            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
              {movieBanner.title}
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              {movieBanner.overview
                ? movieBanner.overview.slice(0, 200) + "..."
                : "No description available."}
            </p>

            <div className="space-x-4">
              <button
                onClick={() => navigate(`/video/${movieBanner.id}`)}
                className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition"
              >
                ▶ Play
              </button>

              <button
                onClick={() => navigate(`/video/${movieBanner.id}`)}
                className="bg-gray-700/70 px-6 py-2 rounded font-semibold hover:bg-gray-600 transition"
              >
                More Info
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
