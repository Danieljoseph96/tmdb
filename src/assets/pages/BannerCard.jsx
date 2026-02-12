import React from "react";
import Navbar from "./Navbar";
import "./BannerCard.css";

export default function BannerCard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/30 to-black/30 flex flex-col banner-container">
  
      <Navbar />

      {/* Main Container - Full Height Center */}
      <div className="flex-1 flex items-center banner-main">
        
        <div className="w-full max-w-6xl mx-auto px-6 banner-wrapper">
          
          {/* 2 Separate Divs with Fixed Gap */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-16 text-white items-center banner-grid">
            
            {/* First Div - Image */}
            <div className="flex justify-center banner-image-wrapper">
              <img
                src="https://i.pinimg.com/originals/82/cf/80/82cf80fcfe03223c7d344b966db1024e.jpg"
                alt="Banner"
                className="w-48 md:w-72 rounded-lg shadow-lg banner-image"
              />
            </div>

            {/* Second Div - Description */}
            <div className="text-center md:text-left space-y-6 banner-content">
              <h1 className="text-3xl md:text-5xl font-bold banner-title">
                Welcome to TMDB
              </h1>
              <p className="text-base md:text-lg text-gray-200 banner-description">
                Discover your next favorite movie or show.
              </p>
              <p className="text-sm md:text-base text-gray-400 banner-subdescription">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded banner-button">
                  Explore Now
                </button>
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}