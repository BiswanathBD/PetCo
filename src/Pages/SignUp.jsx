import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignUp = () => {
  const { createUserWithPass, signInWithGoogle, setUser, error, setError } =
    use(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // Password Registration
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoUrl.value;
    const password = form.password.value;

    if (name.length > 3) {
      setError("Invalid Name");
      return
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createUserWithPass(email, password)
      .then((result) => {
        toast.success("Sign Up Successfully");
        const user = result.user;
        return updateProfile(user, { displayName: name, photoURL });
      })
      .then(() => {
        setUser((prev) => ({ ...prev, displayName: name, photoURL }));
        form.reset();
        navigate(state || "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  // Google Sign-in
  const handleSignInWithGoogle = () => {
    setError("");
    signInWithGoogle()
      .then(() => {
        setError("");
        navigate(state || "/");
      })
      .catch((error) => setError(error.code));
  };

  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <h2 className="text-4xl text-center px-4 md:px-8 lg:px-16 font-semibold mb-4">
        Sign Up Now!
      </h2>

      {/* Show any error (Firebase or validation) */}
      {error && <p className="text-center text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleRegister} className="grid gap-2">
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          onChange={() => setError("")}
          className="input bg-white text-gray-500 w-full"
          placeholder="Your Name"
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          onChange={() => setError("")}
          className="input bg-white text-gray-500 w-full"
          placeholder="Email"
        />

        <label className="label">Photo URL</label>
        <input
          type="text"
          name="photoUrl"
          onChange={() => setError("")}
          className="input bg-white text-gray-500 w-full"
          placeholder="Your Photo URL"
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
            {show ? <VscEyeClosed /> : <VscEye />}
          </div>
        </div>

        <button type="submit" className="py-2 rounded-sm bg-yellow-400 mt-4">
          Sign Up
        </button>
      </form>

      <p className="text-center my-4 text-yellow-400">OR</p>

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
        Already have an account?{" "}
        <Link to={"/SignIn"} className="font-semibold text-yellow-400">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
