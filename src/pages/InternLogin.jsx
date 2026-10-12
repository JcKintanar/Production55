import { doSignInWithEmailAndPassword } from "../db/services/auth";
import { useAuth } from "../db/authContext";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function InternLogin() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [show, setShow] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
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
        <div className="w-lg h-lg bg-black text-white rounded-md p-8">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label className="text-sm text-(--prod-pink) font-bold">
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                placeholder="example@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm my-3 w-full border border-gray-600"
              />
              <label className="text-sm text-(--prod-pink) font-bold">
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
                  className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm my-3 w-full border border-gray-600"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-4 flex items-center"
                >
                  {show ? (
                    <EyeOff size={22} className="text-(--prod-pink)" />
                  ) : (
                    <Eye size={22} className="text-(--prod-pink)" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
