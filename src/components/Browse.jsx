import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies.jsx";
import PrimaryBrowse from "./primaryBrowse.jsx";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="browse-container bg-black">
      <Header />
      <div className="content pt-12 min-h-screen">
        <h1 className="text-white">
          <PrimaryBrowse />
        </h1>
      </div>
    </div>
  );
};
export default Browse;
