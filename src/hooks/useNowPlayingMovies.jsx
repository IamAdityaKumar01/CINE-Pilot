import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../assets/movieSlice";
import { API_OPTIONS } from "../assets/Constants";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS,
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
