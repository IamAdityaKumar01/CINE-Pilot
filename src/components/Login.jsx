import Header from "./Header";
import { backgroundURL } from "../assets/Constants";
import { useRef, useState } from "react";
import { checkValidationData } from "../assets/validation";

const Login = () => {
  let [isSignInForm, setisSignInForm] = useState(true);
  let [showPassword, setShowPassword] = useState("password");
  let [message, setMessage] = useState(null);
  let EmailRef = useRef(null);
  let passwordRef = useRef(null);
  let nameRef = useRef(null);
  let retypePasswordRef = useRef(null);
  function changeLogin() {
    setisSignInForm(!isSignInForm);
    setShowPassword("password");
  }
  function handlePasswordClick() {
    setShowPassword(showPassword === "password" ? "text" : "password");
  }
  function handleSubmitButton() {
    let result = checkValidationData(
      EmailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value,
      retypePasswordRef.current.value
    );

    setMessage(result);
  }

  return (
    <div className="relative w-full h-screen">
      <img
        src={backgroundURL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10 grayscale brightness-[0.3]"
      />

      <div className="relative z-10">
        <Header />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center z-20 px-4 ${
            isSignInForm ? "mt-0" : "mt-25"
          }`}
        >
          <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 border-t-4 border-t-red-600 rounded-lg shadow-2xl p-8 opacity-85">
            <h2 className="text-3xl font-bold text-white text-center mb-8 tracking-wide">
              {isSignInForm ? "Welcome Back!" : "Welcome!"}
            </h2>

            <div className="space-y-5 flex flex-col gap-2 p-4">
              {!isSignInForm && (
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-white placeholder-neutral-400 transition-colors"
                />
              )}
              <input
                ref={EmailRef}
                type="text"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-white placeholder-neutral-400 transition-colors"
              />
              <div className="input-password w-full flex items-center bg-neutral-800 border border-neutral-700 rounded-md px-4 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600">
                <input
                  ref={passwordRef}
                  type={showPassword}
                  placeholder="Password"
                  className="w-full py-3 bg-transparent text-white placeholder-neutral-400 focus:outline-none"
                />
                <span
                  className="ml-2 cursor-pointer select-none "
                  onClick={handlePasswordClick}
                >
                  {showPassword === "password" ? "👀" : "🙈"}
                </span>
              </div>

              {!isSignInForm && (
                <div className="input-password w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600">
                  <input
                    ref={retypePasswordRef}
                    type="password"
                    placeholder="Retype Password"
                    className="w-full py-3 bg-transparent text-white placeholder-neutral-400 focus:outline-none"
                  />
                  <span className="ml-2 cursor-pointer select-none "></span>
                </div>
              )}
              <p className="text-red-600 text-sm mt-1 font-medium">{message}</p>
              <button
                onClick={handleSubmitButton}
                className="w-full p-3 mt-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-all duration-200 shadow-lg tracking-wider text-lg cursor-pointer"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p
                className=" text-white font-light rounded-md cursor-pointer"
                onClick={changeLogin}
              >
                {isSignInForm ? "New to CINEPilot?" : "Already A User?"}{" "}
                <span className="font-bold">
                  {isSignInForm ? "Sign Up" : "Sign In"}
                </span>{" "}
                Now!
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
