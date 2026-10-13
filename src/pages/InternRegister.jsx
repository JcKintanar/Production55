import { useNavigate, Navigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../db/authContext";
import { doCreateUserWithEmailAndPassword } from "../db/services/auth";
import { Eye, EyeOff } from "lucide-react";
import getErrorMessage from "../components/helper/RegisterErrorMessageHelper";

export default function InternRegister() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [show, setShow] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("registering time ");
    if (isRegistering) return;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setIsRegistering(true);
    setErrorMessage("");

    try {
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.code);
      setErrorMessage(getErrorMessage(err.code));
      setIsRegistering(false);
    }
  };

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
              <label className="text-sm text-prod-pink font-bold">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  autoComplete="confirm-password"
                  required
                  value={confirmPassword}
                  placeholder="iloveprod55"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm my-3 w-full border border-gray-600 focus:outline-1"
                />
              </div>
              <button
                type="submit"
                className="bg-prod-pink w-full mt-4 p-2 rounded-sm focus:outline-1"
              >
                Register
              </button>
              <Link
                to="/intern-login"
                className="text-white text-center mt-4 hover:underline active:outline-0 focus:outline-1"
              >
                Nevermind, I have an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
