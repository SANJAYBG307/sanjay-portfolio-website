import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../services/api";

function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const data = await getProfile();
      setProfile(data);
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
      <div className="page-content">
        <section className="hero-section surface-card">
          <div className="hero-layout">
            <div className="hero-content">
              <span className="section-kicker">Data Portfolio</span>
              <h1 className="hero-title">{profile.name}</h1>
              <h2 className="hero-subtitle">{profile.role}</h2>
              <p className="hero-description">{profile.summary}</p>

              <div className="hero-meta">
                <span className="meta-pill">Location: {profile.location}</span>
                <span className="meta-pill">Open to opportunities</span>
                <span className="meta-pill">Analytics + BI + SQL</span>
              </div>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            <aside className="hero-side">
              <div className="hero-spotlight">
                <h3>Current Focus</h3>
                <ul>
                  <li>Dashboard design for operations intelligence</li>
                  <li>SQL-based performance analytics</li>
                  <li>Data modeling for scalable reporting</li>
                </ul>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <p className="hero-stat-value">3+</p>
                  <p className="hero-stat-label">Years Learning</p>
                </div>
                <div className="hero-stat">
                  <p className="hero-stat-value">9</p>
                  <p className="hero-stat-label">Core Skills</p>
                </div>
                <div className="hero-stat">
                  <p className="hero-stat-value">100%</p>
                  <p className="hero-stat-label">Delivery Focus</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section>
          <div className="section-head">
            <span className="section-kicker">Core Strengths</span>
            <h2 className="section-title">Featured Expertise</h2>
            <p className="section-subtitle">
              End-to-end analytics work that translates operational data into measurable business decisions.
            </p>
          </div>

          <div className="expertise-grid">
            <article className="expertise-card surface-card">
              <h3>Data Analytics</h3>
              <p>Build structured analyses to uncover trends, bottlenecks, and opportunities from complex datasets.</p>
            </article>

            <article className="expertise-card surface-card">
              <h3>Data Visualization</h3>
              <p>Design clear dashboards in Power BI and Tableau to support faster and better decisions.</p>
            </article>

            <article className="expertise-card surface-card">
              <h3>Data Engineering</h3>
              <p>Create dependable ETL pipelines and data models that power consistent reporting layers.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
