import React, { useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase";
// Create a context for authentication data
const AuthContext = React.createContext();

const auth = getAuth(app);

// Custom hook for accessing the AuthContext
export function useAuth() {
  return useContext(AuthContext); // Returns the current value of AuthContext
}

// Authentication provider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(); // State to store the currently logged-in user

  // Function to handle user signup using email and password
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password); // Firebase authentication method
  }

  // Set up a listener for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); // Update the currentUser state whenever the authentication state changes
    });

    return unsubscribe; // Cleanup function to remove the listener when the component unmounts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // The value object contains the current user and authentication methods to be provided
  const value = { currentUser, signup };

  // Wrap children components with the AuthContext provider and pass the value object
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
