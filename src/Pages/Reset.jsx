import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { BsCheckCircleFill } from "react-icons/bs";

const Reset = () => {
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.email || "");
  const { resetPassword, error, setError } = useContext(AuthContext);
  const [reset, setReset] = useState(true);

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        setError("");
        setEmail("");
        setReset(false);
      })
      .catch((err) => {
        setError(err.code);
      });
  };
  if (!reset) {
    return (
      <div className="container my-12 mx-auto w-fit p-8">
        <BsCheckCircleFill className="text-8xl mx-auto mb-8"></BsCheckCircleFill>
        <h2 className="text-2xl text-center px-10 sm:px-20 font-semibold">
          Reset email sent.{" "}
          <span className="font-semibold text-yellow-400">
            Check your inbox!
          </span>
        </h2>
        <div className="flex justify-center mt-8 text-[#006E5C] font-semibold">
          <Link to={"/SignIn"} className="px-4 py-2 bg-yellow-400 w-full sm:w-1/2 rounded text-center">
            Back To Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <h2 className="text-4xl text-center px-10 sm:px-20 font-semibold mb-4">
        Reset Password
      </h2>

      {error && <p className="text-center text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleReset} className="grid gap-3">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="input bg-white text-gray-500 w-full"
          placeholder="Enter your email"
        />

        <button type="submit" className="py-2 rounded-sm bg-yellow-400 mt-4">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default Reset;
