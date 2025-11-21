import Header from "./Header";
import { backgroundURL } from "../assets/Constants";
const Login = () => {
  return (
    <div className="Login-container">
      <div className="header">
        <Header />
      </div>
      <img
        src={backgroundURL}
        alt="background image"
        className="w-full h-max"
      />
    </div>
  );
};

export default Login;
