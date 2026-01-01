// app/services/page.jsx
import Image from 'next/image';
import "../globals.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* ===== HERO SECTION ===== */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(/images/trees1.avif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay left-text">
          <div className="hero-content">
            <h1>Explore Our Smart Weather Tools</h1>
            <p className="subtext">
              Stay informed and protected with real-time insights from our
              intelligent weather tools — designed to help you live smarter,
              healthier, and safer.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICE 1: 5-Day Weather Forecast ===== */}
      <section className="service-section dark">
        <div className="service-content reverse">
          <div className="service-text">
            <h2>🌤 5-Day Weather Forecast</h2>
            <p>
              Plan your week with confidence! Get accurate 5-day weather forecasts
              including temperature, precipitation, wind, and humidity, delivered
              in a clear, professional format for your city.
            </p>
          </div>
          <div className="service-image">
            <Image
              src="/images/forecast.avif"
              alt="5-Day Weather Forecast"
              width={500} // Specify dimensions
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICE 2: Air Quality Index ===== */}
      <section className="service-section light">
        <div className="service-content">
          <div className="service-text">
            <h2>🌫️ Air Quality Index Checker</h2>
            <p>
              Monitor air pollution levels in your city with precision. Our
              system tracks AQI using real-time environmental data, alerting you
              when air quality becomes unhealthy — so you can plan your outdoor
              activities safely.
            </p>
          </div>
          <div className="service-image">
            <Image
              src="/images/Smog.avif"
              alt="Air Quality"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICE 3: Pollen Count Tracker ===== */}
      <section className="service-section dark">
        <div className="service-content reverse">
          <div className="service-text">
            <h2>🌸 Pollen Count Tracker</h2>
            <p>
              Keep allergies at bay! Get daily pollen updates from trusted
              sources and stay one step ahead of allergy season with accurate,
              location-based pollen predictions.
            </p>
          </div>
          <div className="service-image">
            <Image
              src="/images/pollen.avif"
              alt="Pollen Tracker"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICE 4: Wind Chill & Heat Index ===== */}
      <section className="service-section light">
        <div className="service-content">
          <div className="service-text">
            <h2>🌬️ Wind Chill & Heat Index Calculator</h2>
            <p>
              Understand how the weather truly feels! This dual calculator
              combines wind speed, humidity, and temperature to reveal how your
              body perceives the climate — so you can prepare for the real feel
              of the day.
            </p>
          </div>
          <div className="service-image">
            <Image
              src="/images/heatIndex.avif"
              alt="Heat Index"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICE 5: Clothing Suggestion Tool ===== */}
      <section className="service-section dark">
        <div className="service-content reverse">
          <div className="service-text">
            <h2>👕 Clothing Suggestion Tool</h2>
            <p>
              No more guessing what to wear! Our AI-based clothing suggestion
              analyzes current conditions and gives outfit recommendations for
              your comfort and safety throughout the day.
            </p>
          </div>
          <div className="service-image">
            <Image
              src="/images/clothing.avif"
              alt="Clothing Suggestion"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
