import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // ------- creeated new user useing to singup ------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ------ feature of Sign In With Email and Password-----
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //.......... sign in with google accout ......
  const SignInbyGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ----------signOut feature----
  const SignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  ///--------- password reset /forget
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // -----ueser profile update------
  const updatedUserSet = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };

  // ------save user info ------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const AuthData = {
    createUser,
    setUser,
    setLoading,
    user,
    loading,
    updatedUserSet,
    SignIn,
    SignInbyGoogle,
    SignOut,
    forgetPassword,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
