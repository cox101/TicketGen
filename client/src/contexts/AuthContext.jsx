import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth"; // Import the necessary methods
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
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null); // State to store the currently logged-in user

  // Function to handle user signup using email and password
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password); // Firebase authentication method for creating a user
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    try {
      // Trigger Firebase password reset email
      return sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Password reset email sent successfully");
          return { success: true, message: "Password reset email sent successfully." };
        })
        .catch((error) => {
          console.error("Error sending password reset email:", error);
          return { success: false, message: error.message };
        });
    } catch (error) {
      console.error("Unexpected error in resetPassword:", error);
      return { success: false, message: "An unexpected error occurred." };
    }
  }
  
  // Set up a listener for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); // Update the currentUser state whenever the authentication state changes
      setLoading(false);
    });

    return unsubscribe; // Cleanup function to remove the listener when the component unmounts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // The value object contains the current user and authentication methods to be provided
  const value = { currentUser, login, signup, logout, resetPassword };

  // Wrap children components with the AuthContext provider and pass the value object
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
