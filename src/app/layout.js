"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css"; // global styles

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>VerdeWeather | Your Nature Dashboard</title>
        <meta
          name="description"
          content="Get real-time weather updates with a touch of nature."
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-white dark:bg-gray-950">
        {/* Header + Login Modal */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}