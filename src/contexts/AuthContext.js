// import React, { useContext, useState, useEffect } from 'react';
// import { auth } from '../firebase';

// const AuthContext = React.createContext();

// export function useAuth() {
//   return React.useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = React.useState();

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   auth.onAuthStateChanged((user) => {
//     setCurrentUser(user);
//   });

//   const value = {
//     currentUser,
//     signup,
//     // login: () => {},
//     // logout: () => {},
//     // resetPassword: () => {},
//     // updateEmail: () => {},
//     // updatePassword: () => {},
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
// import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';

// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  //   const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //   function login(email, password) {
  //     return auth.signInWithEmailAndPassword(email, password)
  //   }

  //   function logout() {
  //     return auth.signOut()
  //   }

  //   function resetPassword(email) {
  //     return auth.sendPasswordResetEmail(email)
  //   }

  //   function updateEmail(email) {
  //     return currentUser.updateEmail(email)
  //   }

  //   function updatePassword(password) {
  //     return currentUser.updatePassword(password)
  //   }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      //   setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,

    signup,
  };

  //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
