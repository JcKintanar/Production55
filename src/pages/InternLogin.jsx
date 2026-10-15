import { doSignInWithEmailAndPassword } from "../db/services/auth";
import { useAuth } from "../db/authContext";
import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { getLoginErrorMessage } from "../components/helper/UserAuthErrorMessageHelper";

export default function InternLogin() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [show, setShow] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSigningIn) return;

    setIsSigningIn(true);
    setErrorMessage("");

    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.code);
      setErrorMessage(getLoginErrorMessage(err.code));
      setIsSigningIn(false);
    }
  };

  // TODO: for google sign in
  /* const onGoogleSignIn = (e) => {
    e.preventDefault()
    if (!isSigningIn){
      setIsSigningIn(true)
      doSignInWithEmailAndPassword().catch(err => {
        setIsSigningIn(false)
      });
    }
  } */

  return (
    <div>
      {userLoggedIn && <Navigate to={"/intern-dashboard"} replace={true} />}
      <div className="flex justify-center items-center min-h-screen min-w-screen bg-white">
        <div className="w-lg bg-black text-white rounded-md p-8">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col">
              {errorMessage && (
                <span className="text-red-500 font-bold italic text-sm text-center">
                  {errorMessage}
                </span>
              )}
              <label className="text-sm text-prod-pink font-bold">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                placeholder="example@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm my-3 w-full border border-gray-600 focus:outline-1"
              />
              <label className="text-sm text-prod-pink font-bold">
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  placeholder="iloveprod55"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm my-3 w-full border border-gray-600 focus:outline-1"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 py-auto right-4 flex items-center focus:outline-0"
                >
                  {show ? (
                    <EyeOff size={22} className="text-prod-pink" />
                  ) : (
                    <Eye size={22} className="text-prod-pink" />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="bg-prod-pink w-full mt-4 p-2 rounded-sm focus:outline-1"
              >
                Login
              </button>
              <Link
                to="/intern-register"
                className="text-white text-center mt-4 hover:underline active:outline-0 focus:outline-1"
              >
                I don't have an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
