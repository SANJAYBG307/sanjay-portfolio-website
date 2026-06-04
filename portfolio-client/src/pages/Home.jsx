import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../services/api";

const heroStats = [
  { value: "50+", label: "Routes Analyzed" },
  { value: "8K+", label: "Records Processed" },
  { value: "8.05", label: "CGPA" },
];

function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const profileData = await getProfile();
      setProfile(profileData);
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <div className="page-content">
        <div className="loading-state">
          <div className="spinner" />
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="page-content home-compact">
        <section className="hero-section surface-card reveal-on-scroll home-hero-section">
          <div className="hero-layout">
            <div className="hero-content">
              <span className="section-kicker home-kicker">
                <span className="kicker-icon" aria-hidden="true" />
                Open to Work &middot; Data Analytics
              </span>

              <h1 className="hero-title">Sanjay B G</h1>

              <p className="hero-subtitle hero-role-line">
                Data Analyst &middot; <strong>SQL &amp; BI Specialist</strong>
              </p>

              <p className="hero-description">
                Transforming raw data into strategic decisions. Proficient in SQL,
                Python, Power BI &amp; Tableau - with real-world experience building KPI
                dashboards, ETL pipelines, and analytics-ready datasets.
              </p>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Hire Me &rarr;
                </Link>
              </div>

              <div className="hero-stats home-hero-stats">
                {heroStats.map((stat) => (
                  <div className="hero-stat" key={stat.label}>
                    <p className="hero-stat-value">{stat.value}</p>
                    <p className="hero-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-side">
              <div className="home-photo-wrap">
                <div className="profile-photo-card home-photo-card">
                  <img src="/profile-photo.jpeg" alt={profile.name} className="profile-photo home-profile-photo" />
                </div>

                <div className="home-photo-badge">
                  <span aria-hidden="true">📍</span>
                  Bengaluru, Karnataka
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
