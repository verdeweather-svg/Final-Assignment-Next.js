"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaAngleRight } from "react-icons/fa";
import "../globals.css"; // globals.css import

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* About / Logo */}
        <div className="footer-about">
          <div className="footer-logo">
            <img src="/images/logo.jpg" alt="VerdeWeather Logo" />
            <h3>VerdeWeather
              <p>Bringing Nature To Your Day</p>
            </h3>
          </div>
          <p>
            Your reliable source for real-time weather forecasts, updates, and insights. 
            Stay informed and prepared wherever you go.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><FaAngleRight className="link-icon" /><Link href="/">Home</Link></li>
            <li><FaAngleRight className="link-icon" /><Link href="/about">About</Link></li>
            <li><FaAngleRight className="link-icon" /><Link href="/services">Services</Link></li>
            <li><FaAngleRight className="link-icon" /><Link href="/contact">Contact</Link></li>
            <li><FaAngleRight className="link-icon" /><Link href="/Register">Register</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 VerdeWeather | Designed by Roll No: 24, 146</p>
      </div>
    </footer>
  );
}