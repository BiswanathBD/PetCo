import { use } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUserWithPass, setUser, setError } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoUrl.value;
    const password = form.password.value;

    createUserWithPass(email, password, name, photoURL)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photoURL });
        });
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <h2 className="text-4xl text-center px-4 md:px-8 lg:px-16 font-semibold mb-4">
        Sign Up Now!
      </h2>
      <form onSubmit={handleRegister} className="grid">
        {/* name */}
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input bg-white text-gray-500 w-full mb-2"
          placeholder="Your Name"
        />
        {/* email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input bg-white text-gray-500 w-full mb-2"
          placeholder="Email"
        />
        {/* photo url */}
        <label className="label">Photo URL</label>
        <input
          type="text"
          name="photoUrl"
          className="input bg-white text-gray-500 w-full mb-2"
          placeholder="Your Photo Url"
        />
        {/* password */}
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input bg-white text-gray-500 w-full"
          placeholder="Password"
        />
        <button className="py-2 rounded-sm bg-yellow-400 mt-4">Sign Up</button>
      </form>
      <p className="text-center mt-4">
        Already have account?{" "}
        <Link to={"/SignIn"} className="font-semibold text-yellow-400">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
