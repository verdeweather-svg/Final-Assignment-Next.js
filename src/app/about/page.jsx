// app/about/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

const About = () => {
  return (
    <section className="about-section">
      {/* Top About Section */}
      <div className="about-container merged">
        <div className="about-image">
          <Image 
            src="/images/about.avif" // Make sure the image is in the /public folder
            alt="VerdeWeather Overview" 
            width={800} 
            height={400} 
          />
          <div className="image-overlay"></div>
        </div>

        <div className="about-content">
          <h2>About VerdeWeather</h2>
          <div className="divider"></div>
          <p>
            VerdeWeather is designed to keep you informed with real-time, 
            location-based forecasts and environmental insights. Our goal is 
            to help you stay weather-aware through intuitive design and 
            eco-inspired technology.
          </p>
          <p>
            Inspired by trusted platforms like <strong>Weather.com</strong> 
            and <strong>AccuWeather</strong>, VerdeWeather blends nature’s 
            calm aesthetics with precision weather data — all in one smart interface.
          </p>
        </div>
      </div>

      {/* Developer / Member Details */}
      <section className="about-developers">
        <h3>Meet Our Team</h3>
        <p className="portfolio-intro">
          The creative minds who designed and developed this weather app.
        </p>

        <div className="portfolio-grid">
          {/* Sania Card */}
          <div className="portfolio-card">
            <Image 
              src="/images/sania.jpg" 
              alt="Sania Fiaz" 
              width={200} 
              height={200} 
            />
            <h4>Sania Fiaz</h4>
            <p className="role">Frontend Developer & UI Designer</p>
            <p><strong>Education:</strong> BS Computer Science</p>
            <p><strong>Skills:</strong> React, CSS, JavaScript, Design</p>
            <p className="bio">
              Passionate about building beautiful interfaces and creating smooth
              user experiences that blend creativity with functionality.
            </p>
            <div className="portfolio-links">
              <Link href="#">LinkedIn</Link>
              <Link href="#">GitHub</Link>
              <Link href="#">Email</Link>
            </div>
          </div>

          {/* Safa Card */}
          <div className="portfolio-card">
            <Image 
              src="/images/safa.jpg" 
              alt="Safa Tariq" 
              width={200} 
              height={200} 
            />
            <h4>Safa Tariq</h4>
            <p className="role">Backend Developer & Tester</p>
            <p><strong>Education:</strong> BS Computer Science</p>
            <p><strong>Skills:</strong> Node.js, MySQL, Java, Debugging</p>
            <p className="bio">
              Focused on writing clean, efficient code and ensuring system
              performance, reliability, and security across backend services.
            </p>
            <div className="portfolio-links">
              <Link href="#">LinkedIn</Link>
              <Link href="#">GitHub</Link>
              <Link href="#">Email</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h3>Our Location</h3>
        <p>“Developed in Pakistan with a vision to bring reliable weather insights to everyone.”</p>
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
  );
};

export default About;
