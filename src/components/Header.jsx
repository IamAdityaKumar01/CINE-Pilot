import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <div className="header-container z-10 absolute mt-3 ml-3">
      <img src={logo} alt="logo" className="h-17 w-auto rounded-lg" />
    </div>
  );
};

export default Header;
