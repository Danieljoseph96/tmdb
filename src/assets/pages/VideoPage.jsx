import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Access_Token, { Api_Key, movie } from "../config/keys";

export default function VideoPage() {
  const { id } = useParams();
  const iframeRef = useRef(null);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `${movie}/${id}/videos?api_key=${Api_Key}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${Access_Token}`,
            },
          }
        );

        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const trailer =
            data.results.find((vid) => vid.type === "Trailer") ||
            data.results[0];

          setVideoKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [id]);

  const handleFullscreen = () => {
    if (iframeRef.current?.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  };

  if (!videoKey) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading Trailer...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-5xl">
          <iframe
            ref={iframeRef}
            className="w-full h-[70vh] rounded-xl shadow-2xl"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="Movie Trailer"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>

          <button
            onClick={handleFullscreen}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Full Screen
          </button>
        </div>
      </div>
    </div>
  );
}
