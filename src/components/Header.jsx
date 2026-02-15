import logo from "../assets/logo.jpg";
import happy from "../assets/happy.png";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { removeUser } from "../assets/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../assets/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md shadow-2xl border-b border-red-500/50 p-2 sm:p-3 md:p-4 flex justify-between items-center">
      <img
        src={logo}
        alt="CINEPilot Logo"
        className="w-24 sm:w-32 md:w-44 h-auto object-contain cursor-pointer hover:scale-105 transition-transform"
      />

      {store && (
        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-6">
          <span className="hidden md:block text-white text-sm md:text-base font-medium truncate max-w-32">
            {store?.displayName}
          </span>

          <img
            src={happy}
            alt="User avatar"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full cursor-pointer hover:scale-110 transition-transform"
          />

          <button
            onClick={handleSignOut}
            className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm md:text-base text-white font-medium rounded bg-red-600/20 hover:bg-red-600 hover:scale-105 transition-all"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
