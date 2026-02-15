import React, { useEffect } from "react";
import { API_OPTIONS } from "../assets/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../assets/movieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  useEffect(() => {
    if (movieId) {
      getmovieVideos();
    }
  }, [movieId]);

  const getmovieVideos = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await result.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailerVideo = filterData.length ? filterData[0] : json.results[0];
    console.log(trailerVideo);
    dispatch(addTrailerVideo(trailerVideo));
  };

  if (!trailer) return null;

  return (
    <iframe
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      style={{ border: "none", pointerEvents: "none" }}
    ></iframe>
  );
};

export default VideoBackground;
