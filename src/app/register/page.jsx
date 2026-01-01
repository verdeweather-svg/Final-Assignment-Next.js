"use client"; // Ensures this page is rendered on the client side

import React, { useState } from "react";
import "../globals.css"; // Global styles

export default function Register() {
  const [error, setError] = useState(""); // For error handling
  const [success, setSuccess] = useState(false); // For success message

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.fullname.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target["confirm-password"].value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Simulating a successful registration by saving user data to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      setError("User already exists! Please try a different email.");
      return;
    }

    // Simulating saving user data in localStorage
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Simulate a successful registration
    setSuccess(true);
    setError(""); // Clear any previous error
  };

  return (
    <div className="register-container">
      {/* Show Success Message if Registered */}
      {success ? (
        <div className="success-message">
          <h2>Registration successful!</h2>
          <p>Your account has been created successfully. You can now log in.</p>
        </div>
      ) : (
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Register</button>

          {/* Display error message */}
          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
}
