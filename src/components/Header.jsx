import logo from "../assets/logo.jpg";
import happy from "../assets/happy.png";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store.user);

  console.log(store);
  console.log(store?.displayName);

  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
    console.log("header rendered");
  }
  return (
    <div className="w-full bg-black rounded-lg shadow-2xl p-4 opacity-85 border border-b-red-500 flex justify-between">
      <img
        src={logo}
        alt="CINEPilot Logo"
        className="w-44 object-contain cursor-pointer transition-transform duration-300 hover:scale-105 drop-shadow-lg"
      />

      {store && (
        <div className="flex justify-between items-center gap-10 ">
          <div className="displayName text-white">{store?.displayName}</div>
          <img
            className="w-7 h-7 cursor-pointer transition-transform duration-300 hover:scale-105"
            src={happy}
          />

          <div className="btn">
            <button
              onClick={handleSignOut}
              className="text-white cursor-pointer transition-transform duration-300 hover:scale-105 mr-7"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
