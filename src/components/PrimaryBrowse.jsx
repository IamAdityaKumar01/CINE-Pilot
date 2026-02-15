import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const PrimaryBrowse = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const { original_title, overview, id } = movies[0];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <VideoBackground movieId={id} />
      </div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black z-10" />

      <div className="relative z-20 h-full flex items-end md:items-center">
        <div className="w-[90%] md:w-[40%] max-w-full md:max-w-[600px] px-5 md:px-[60px] ml-auto md:ml-[60px] mr-auto md:mr-0 mb-[60px] md:mb-0">
          <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3.5rem] font-bold text-white mb-3 md:mb-5 leading-tight tracking-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            {original_title}
          </h1>
          <p className="text-[0.9rem] md:text-[1.1rem] text-gray-300 leading-relaxed mb-5 md:mb-[30px] line-clamp-3 md:line-clamp-4 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.9)]">
            {overview}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-2.5 md:py-3 text-[0.95rem] md:text-[1.1rem] font-semibold text-black bg-white rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-white/85 hover:scale-105 active:scale-95 min-w-0 sm:min-w-[140px]">
              <span className="text-lg md:text-xl">▶️</span>
              PLAY
            </button>
            <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 text-[0.95rem] md:text-[1.1rem] font-semibold text-white bg-gray-500/70 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-gray-500/50 hover:scale-105 active:scale-95 min-w-0 sm:min-w-[160px]">
              <span className="text-base md:text-lg">ⓘ</span>
              MORE INFO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryBrowse;
