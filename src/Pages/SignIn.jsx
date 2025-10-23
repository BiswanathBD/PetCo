import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { signInWithPassword, signInWithGoogle, setError } = use(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  // Email/Password Sign-in
  const handleSigninWithPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithPassword(email, password)
      .then(() => {
        form.reset();
        setError("");
        navigate(state || "/");
      })
      .catch((error) => setError(error.code));
  };

  // Google Sign-in
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        setError("");
        navigate(state || "/");
      })
      .catch((error) => setError(error.code));
  };

  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <h2 className="text-4xl text-center px-10 sm:px-20 font-semibold mb-4">
        Sign In Here!
      </h2>

      {/* Email/Password Form */}
      <form onSubmit={handleSigninWithPassword} className="grid gap-3">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input bg-white text-gray-500 w-full"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input bg-white text-gray-500 w-full"
          placeholder="Password"
        />
        <Link to={"/reset"} className="mt-2 hover:text-yellow-400">
          Forgot Password?
        </Link>
        <button type="submit" className="py-2 rounded-sm bg-yellow-400 mt-4">
          Sign In
        </button>
      </form>

      <p className="text-center my-4 text-yellow-400">OR</p>

      {/* Google Sign-in Button */}
      <button
        onClick={handleSignInWithGoogle}
        className="px-4 py-2 flex justify-center items-center gap-2 bg-white w-full rounded-sm"
      >
        <FcGoogle size={20} />
        <span className="text-[#006E5C] font-semibold">
          Sign In with Google
        </span>
      </button>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to={"/SignUp"} className="font-semibold text-yellow-400">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
