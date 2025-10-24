import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignIn = () => {
  const { signInWithPassword, signInWithGoogle, error, setError } =
    use(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [emailInput, setEmailInput] = useState("");
  const [show, setShow] = useState(false);

  // Password sign in
  const handleSigninWithPassword = (e) => {
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithPassword(email, password)
      .then(() => {
        toast.success("Sign In Successfully");
        setError("");
        navigate(state || "/");
      })
      .catch(() => setError("Wrong Email or Password"));
  };

  // Google sign in
  const handleSignInWithGoogle = () => {
    setError("");
    signInWithGoogle()
      .then(() => {
        setError("");
        navigate(state || "/");
      })
      .catch((err) => setError("err.code"));
  };

  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <h2 className="text-4xl text-center px-10 sm:px-20 font-semibold mb-4">
        Sign In Here!
      </h2>

      {error && <p className="text-center text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSigninWithPassword} className="grid gap-3">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={emailInput}
          onChange={(e) => {
            setEmailInput(e.target.value);
            setError("");
          }}
          className="input bg-white text-gray-500 w-full"
          placeholder="Email"
          required
        />

        <label className="label">Password</label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            onChange={() => setError("")}
            className="input bg-white text-gray-500 w-full pr-10"
            placeholder="Password"
            required
          />
          <div
            onClick={() => setShow(!show)}
            className="absolute top-2 right-2 text-neutral-500 text-2xl cursor-pointer z-10"
          >
            {show ? <VscEyeClosed></VscEyeClosed> : <VscEye></VscEye>}
          </div>
        </div>

        {/* Forgot Password Link */}
        <Link
          to="/reset"
          state={{ email: emailInput }}
          className="mt-2 hover:text-yellow-400"
        >
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

      {/* Sign Up Link */}
      <p className="text-center mt-4">
        Don&apos;t have an account?{" "}
        <Link to="/SignUp" className="font-semibold text-yellow-400">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
