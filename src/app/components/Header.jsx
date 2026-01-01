"use client";

import Link from "next/link";
import "../globals.css"; // globals.css import for styling


export default function Header({ modalType, setModalType }) {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="VerdeWeather Logo" />
        <h1 className="logo-text">
          <Link href="/">Verde Weather</Link>
          <p>Bringing Nature To Your Day</p>
        </h1>
      </div>


      <nav className="nav-menu">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>

      </nav>
    </header>
  );
}