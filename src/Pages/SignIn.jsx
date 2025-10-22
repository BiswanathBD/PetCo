import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const { signInWithPassword, setError } = use(AuthContext);

  const handleSigninWithPassword = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signInWithPassword(email, password)
      .then(() => {
        e.target.reset();
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <h2 className="text-4xl text-center px-10 sm:px-20 font-semibold mb-4">
        Sign In Here!
      </h2>
      <form onSubmit={handleSigninWithPassword} className="grid">
        {/* email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input bg-white text-gray-500 w-full mb-2"
          placeholder="Email"
        />
        {/* password */}
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input bg-white text-gray-500 w-full"
          placeholder="Password"
        />
        <Link to={"/reset"} className="mt-2 hover:text-yellow-400">
          Forget Password?
        </Link>
        <button className="py-2 rounded-sm bg-yellow-400 mt-4">Sign In</button>
      </form>
      <p className="text-center mt-4">
        Don't have account?{" "}
        <Link to={"/SignUp"} className="font-semibold text-yellow-400">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
