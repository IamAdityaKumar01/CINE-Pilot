import Header from "./Header";
import { useEffect } from "react";
import { API_OPTIONS } from "../assets/Constants.jsx";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../assets/movieSlice.js";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS,
      );
      const json = await data.json();

      dispatch(addNowPlayingMovies(json.result));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="browse-container bg-black">
      <Header />
      <div className="content pt-12 min-h-screen">
        <h1 className="text-white">
          COMING SOON! FIND YOUR BEST MOVIES HERE!!!!!!!!!!
        </h1>
      </div>
    </div>
  );
};
export default Browse;
