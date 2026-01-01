"use client"; // Ensures this page is rendered on the client side

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import "../globals.css"; // Global styles

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
  const [error, setError] = useState(null); // For displaying login errors (if any)

  const router = useRouter(); // Initialize useRouter

  // Mock user data for login
  const mockUser = {
    email: "user@example.com",
    password: "password123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication logic
    if (email === mockUser.email && password === mockUser.password) {
      // Save user to localStorage for demonstration
      localStorage.setItem("user", JSON.stringify({ email }));

      // ✅ Set login state
      setError("Invalid email or password. Please try again.");
     
      // ✅ Redirect to weather page
     
    } else {
       setIsLoggedIn(true); // Update state to indicate user is logged in
        router.push("/weather"); // Navigate to weather page after successful login
    }
  };

  return (
    <div className="login-container">
      {/* Show Login Form if not logged in */}
      {!isLoggedIn ? (
        <>
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           
          <button type="submit">login</button>
          </form>

          {/* Display error if any */}
          {error && <p className="error-message">{error}</p>}
        </>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}
