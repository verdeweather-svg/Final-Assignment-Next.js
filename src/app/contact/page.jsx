// src/app/contact/page.jsx
"use client";  // Ensures this page is rendered on the client side

import "../globals.css"; // Global styles

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Contact Info First */}
      <section className="contact1">
        <h1>Contact VerdeWeather</h1>
        <p className="intro-text">
          Have questions or suggestions? Reach out to us — we’d love to hear from you! 
          Whether it’s feedback, partnership ideas, or a simple weather query, we’re here to help.
        </p>

        <div className="contact-details">
          <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>Our Numbers</h3>
            <p>+92-26673678</p>
            <p>+92-36726495</p>
          </div>

          <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>VerdeWeather@gmail.com</p>
          </div>

          <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Visit Us</h3>
            <p>Lahore, Pakistan - 54700</p>
          </div>
        </div>
      </section>

      {/* Message Form */}
      <section className="message">
        <div className="form-container">
          <form>
            <h3>Send Us Your Query</h3>
            <input type="text" placeholder="Your Name*" required /><br />
            <input type="number" placeholder="Your Mobile*" required /><br />
            <input type="email" placeholder="Your Email*" required /><br />
            <textarea placeholder="Enter your message here..." cols="30" rows="10"></textarea><br />
            <input type="submit" value="Send Message" />
          </form>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h3>Our Location</h3>
          <p>Developed in Pakistan with a mission to bring reliable weather insights for everyone.</p>
          <div className="map-container">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13603.347412771803!2d74.31398915228306!3d31.520370039617312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f5f13a4c9b7%3A0xc0b5b0b48b7c0c4!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698173816012!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </section>

      {/* About Short Summary */}
      <section className="about-short">
        <h2>About VerdeWeather</h2>
        <p>
          VerdeWeather is your intelligent weather partner. We provide precise forecasts, 
          air quality updates, and lifestyle-based insights to help you plan every day with confidence.  
          Our goal is simple — to make weather smart, useful, and beautifully accessible.
        </p>
      </section>

      {/* Services Summary */}
      <section className="services-short">
        <h2>Our Key Services</h2>
        <ul>
          <li>💨 <b>Air Quality Index Checker</b> – Stay aware of pollution levels in your area.</li>
          <li>🌿 <b>Pollen Count Tracker</b> – Get allergy-safe outdoor insights.</li>
          <li>🌡️ <b>Wind Chill & Heat Index</b> – Understand how the temperature really feels.</li>
          <li>👕 <b>Clothing Suggestion Tool</b> – Dress perfectly for today’s weather.</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
