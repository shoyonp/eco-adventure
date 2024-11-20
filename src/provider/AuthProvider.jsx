import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return new GoogleAuthProvider();
  };

  const UserLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

//   const forgetPassword = (email) => {
//     sendPasswordResetEmail(auth, email);
//     console.log(email);
//   };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    user,
    setUser,
    creatNewUser,
    userLogin,
    UserLogOut,
    loading,
    updateUserProfile,
    googleLogin,
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubcribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
