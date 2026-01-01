// src/app/home/page.jsx
"use client"; // This ensures the page is rendered on the client side

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Use next/link for routing
import Image from "next/image"; // Use next/image for optimized image handling
import "./globals.css"; // Global styles

export default function Home({ setModalType }) {
  const [index, setIndex] = useState(0);
  const sliderPaused = useRef(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Local 7 hero images
  const heroImages = [
    { src: "/images/hero1.avif", alt: "Bright sunrise" },
    { src: "/images/hero2.avif", alt: "Cloudy sky" },
    { src: "/images/hero3.avif", alt: "Rainy weather" },
    { src: "/images/hero4.jpg", alt: "Evening sunset" },
    { src: "/images/hero5.jpg", alt: "Stormy clouds" },
    { src: "/images/hero6.avif", alt: "Calm morning" },
    { src: "/images/hero7.avif", alt: "Night sky" },
    { src: "/images/hero8.avif", alt: "Night sky" },
  ];

  // Slider + time effect
  useEffect(() => {
    const slide = setInterval(() => {
      if (!sliderPaused.current) setIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    const clock = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      clearInterval(slide);
      clearInterval(clock);
    };
  }, []);
  
  const goTo = (i) => setIndex(i);

  return (
    <div className="home-container">
      {/* Hero */}
      <section
        className="hero-section"
        onMouseEnter={() => (sliderPaused.current = true)}
        onMouseLeave={() => (sliderPaused.current = false)}
      >
        <div className="hero-slider">
          {heroImages.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              className={`hero-slide ${i === index ? "visible" : ""}`}
              width={1920}
              height={1080}
            />
          ))}
        </div>

        <div className="hero-overlay">
          <div className="hero-text">
            <h1>See the sky before you step outside🌤️</h1>
            <p>Stay updated with accurate weather, UV, air quality and comfort insights.</p>
            <div className="hero-buttons">

              <Link href="/weather" className="ghost-btn">View Dashboard</Link>
              <Link href="/about" className="ghost-btn">Learn More</Link>
            </div>
          </div>

          <div className="hero-dots">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <div className="hero-time">{time}</div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>Our Smart Features</h2>
        <div className="service-grid">
          <div className="service-item">
            <Image
              src="/images/Forecast.avif"
              alt="Forecast"
              width={500}
              height={300}
            />
            <div className="service-info">
              <h3>Live Forecasts</h3>
              <p>Accurate temperature, humidity, and wind details for your city.</p>
              <Link href="/services">Explore →</Link>
            </div>
          </div>

          <div className="service-item">
            <Image
              src="/images/AirQuality.avif"
              alt="Air Quality"
              width={500}
              height={300}
            />
            <div className="service-info">
              <h3>Air Quality Index</h3>
              <p>Check AQI levels and get health safety alerts instantly.</p>
              <Link href="/services">View AQI →</Link>
            </div>
          </div>

          <div className="service-item">
            <Image
              src="/images/UVprotection.avif"
              alt="UV Safety"
              width={500}
              height={300}
            />
            <div className="service-info">
              <h3>UV Safety</h3>
              <p>Monitor UV intensity and protect your skin throughout the day.</p>
              <Link href="/services">Check UV →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Dashboard */}
      <section className="contact-section">
        {/* Contact Card */}
        <div className="contact-card contact-blend">
          <div className="contact-image">
            <Image
              src="/images/contact.avif"
              alt="Contact"
              width={500}
              height={300}
            />
          </div>
          <div className="contact-text">
            <h3>Need help or guidance?</h3>
            <p>
              Have a question about forecasts, reports, or your account? Our team is always
              ready to assist you with accurate updates and smooth support.
            </p>
            <p>
              Get in touch and let’s make your weather experience effortless and reliable.
            </p>
            <Link href="/contact" className="link-btn">Contact Us</Link>
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="contact-card dashboard-blend">
          <div className="contact-text">
            <h3>Explore your personalized dashboard</h3>
            <p>
              Gain instant access to real-time metrics — temperature, humidity, wind speed,
              and air quality — all in one beautiful view.
            </p>
            <p>
              Monitor your city, compare trends, and track weather insights with our
              interactive dashboard designed for you.
            </p>
            <Link href="/weather" className="ghost-btn">View Dashboard</Link>
          </div>
          <div className="contact-image">
            <Image
              src="/images/dashboard.avif"
              alt="Dashboard"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
