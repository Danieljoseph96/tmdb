import React, { useRef } from "react";
import Navbar from "./Navbar";

export default function VideoPage() {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleHover = () => {
    console.log("Hovering over navbar");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black/30 to-black/30 flex flex-col py-0 px-0 m-0 ">
      
      {/* Navbar at top with hover handler */}
      <div onMouseEnter={handleHover} className="w-full">
        <Navbar />
      </div>

      {/* Video container - centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl px-4 py-8">
          <video
            ref={videoRef}
            className="w-full rounded-xl shadow-2xl"
            controls
            preload="metadata"
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={handleFullscreen}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Full Screen
          </button>
        </div>
      </div>
      
    </div>
  );
}