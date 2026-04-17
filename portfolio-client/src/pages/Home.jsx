import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile, getProjects } from "../services/api";

function Home() {
  const [profile, setProfile] = useState(null);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    async function loadProfile() {
      const [profileData, projectData] = await Promise.all([getProfile(), getProjects()]);

      const orderedProjects = [...projectData].sort((a, b) => {
        const aGroup = a.id >= 4 ? 0 : 1;
        const bGroup = b.id >= 4 ? 0 : 1;

        if (aGroup !== bGroup) {
          return aGroup - bGroup;
        }

        return a.id - b.id;
      });

      setProfile(profileData);
      setFeaturedProjects(orderedProjects.slice(0, 3));
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
        {/* ==== HERO SECTION ==== */}
        <section className="hero-section surface-card reveal-on-scroll">
          <div className="hero-layout">
            <div className="hero-content">
              <span className="section-kicker home-kicker">
                <span className="kicker-icon" aria-hidden="true">✦</span>
                Data Analyst Portfolio
              </span>
              <h1 className="hero-title">SANJAY B G</h1>
              <h2 className="hero-subtitle">{profile.headline || "Data Analyst | SQL, Python, Excel, Power BI"}</h2>
              <p className="hero-headline-note">
                {profile.subheadline || "Turning operational data into clear business decisions."}
              </p>

              <div className="profile-photo-card mobile-photo-card">
                <img src="/profile-photo.jpeg" alt={profile.name} className="profile-photo" />
              </div>

              <p className="hero-description">
                I turn operational data into executive-ready decisions with SQL analysis, KPI design, and clear BI storytelling.
              </p>

              <p className="hero-focus-line">Focused on freight revenue, route profitability, and vendor cash-flow insights.</p>

              <div className="hero-meta">
                <span className="meta-pill">
                  <span className="meta-icon" aria-hidden="true">📍</span>
                  Based in Bengaluru, Karnataka
                </span>
                <span className="meta-pill">
                  <span className="meta-icon" aria-hidden="true">🚀</span>
                  Open to Data Analyst roles
                </span>
              </div>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  Explore Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>

            <aside className="hero-side">
              <div className="profile-photo-card desktop-photo-card">
                <img src="/profile-photo.jpeg" alt={profile.name} className="profile-photo" />
              </div>

              <div className="hero-spotlight">
                <h3>
                  <span className="spotlight-icon" aria-hidden="true">⚡</span>
                  Business Impact Snapshot
                </h3>
                <ul>
                  <li>2.17M freight revenue analyzed from GC data</li>
                  <li>3.86M transport cost reviewed from GDM data</li>
                  <li>4.33M vendor spend tracked from THP data</li>
                </ul>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <p className="hero-stat-value">3</p>
                  <p className="hero-stat-label">Case Studies</p>
                </div>
                <div className="hero-stat">
                  <p className="hero-stat-value">250</p>
                  <p className="hero-stat-label">Records per Dataset</p>
                </div>
                <div className="hero-stat">
                  <p className="hero-stat-value">4.33M</p>
                  <p className="hero-stat-label">Vendor Spend Reviewed</p>
                </div>
              </div>

              <div className="hero-side-links social-links-section">
                <p className="social-label">Quick Connect</p>
                <div className="social-links">
                  <a href="mailto:Sanjaysanju143216@gmail.com" className="social-link">
                    <span className="social-link-icon" aria-hidden="true">✉</span>
                    Email
                  </a>
                  <a href="https://linkedin.com/in/sanjay-b-g-960181340" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-link-icon" aria-hidden="true">in</span>
                    LinkedIn
                  </a>
                  <a href="https://github.com/SANJAYBG307" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-link-icon" aria-hidden="true">GH</span>
                    GitHub
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ==== IMPACT STATS SECTION ==== */}
        <section className="impact-stats-section reveal-on-scroll">
          <div className="section-head">
            <h2 className="section-title">Quantified Impact</h2>
            <p className="section-subtitle">Real results from GC, GDM, and THP analysis during internship experience</p>
          </div>
          
          <div className="impact-stats-grid">
            <div className="impact-stat-card surface-card">
              <div className="stat-number">2.17M</div>
              <div className="stat-label">Freight Revenue</div>
              <div className="stat-desc">Mapped customer and route concentration in GC</div>
            </div>
            <div className="impact-stat-card surface-card">
              <div className="stat-number">3.86M</div>
              <div className="stat-label">Transport Cost</div>
              <div className="stat-desc">Measured dispatch efficiency and route cost exposure</div>
            </div>
            <div className="impact-stat-card surface-card">
              <div className="stat-number">2.04M</div>
              <div className="stat-label">Outstanding Payables</div>
              <div className="stat-desc">Highlighted vendor liquidity pressure in THP</div>
            </div>
          </div>
        </section>

        {/* ==== FEATURED PROJECTS SECTION ==== */}
        <section className="featured-projects-section reveal-on-scroll">
          <div className="section-head">
            <span className="section-kicker">Featured Work</span>
            <h2 className="section-title">Top Projects at a Glance</h2>
            <p className="section-subtitle">High-impact case studies selected to give a fast first impression.</p>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <article key={project.id} className="project-preview-card surface-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <Link to={`/projects/${project.id}`} className="project-link">
                    View →
                  </Link>
                </div>
                <p className="project-desc">{project.summary}</p>
                <div className="project-techs">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={`${project.id}-${tool}`} className="tool-badge">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==== RECRUITER QUICK CONNECT ==== */}
        <section className="reveal-on-scroll">
          <div className="recruiter-contact-section">
            <h3>🚀 Ready to collaborate?</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1.2rem" }}>
              Open for Data Analyst roles and analytics collaborations.
            </p>
            <div className="recruiter-links">
              <Link to="/contact" className="recruiter-link">
                <span className="recruiter-link-icon">📬</span>
                Contact Page
              </Link>
              <Link to="/projects" className="recruiter-link">
                <span className="recruiter-link-icon">📊</span>
                Project Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
