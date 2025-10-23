import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(loading);

  console.log(error);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // create user with password
  const createUserWithPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with password
  const signInWithPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google Sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    error,
    setError,
    loading,
    setLoading,
    createUserWithPass,
    signInWithPassword,
    signInWithGoogle,
    userSignOut,
    resetPassword,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
