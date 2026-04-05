function About() {
  return (
    <div className="page-content">
      <section>
        <div className="section-head reveal-on-scroll">
          <span className="section-kicker">About</span>
          <h1 className="section-title">Data Analyst focused on solving business problems</h1>
          <p className="section-subtitle">
            I analyze operational data to deliver clear insights and practical business decisions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left-stack">
            <article className="about-panel surface-card reveal-on-scroll">
              <h2 className="skill-section-title">My Story</h2>
              <p>
                I am a Data Analyst with hands-on experience in logistics analytics. At Manoj Cargo Carriers, I worked with shipment, dispatch, and vendor datasets to uncover route-level performance patterns.
              </p>

              <p>
                My strength is end-to-end analytics: data cleaning, transformation, KPI tracking, and dashboard delivery using SQL, Python, Power BI, and Tableau.
              </p>
            </article>

            <section className="surface-card about-panel reveal-on-scroll">
              <h2 className="skill-section-title">What I Bring</h2>
              <ul className="about-list">
                <li>Strong SQL-driven analysis for operational and business data</li>
                <li>Clean, reliable datasets through ETL and validation</li>
                <li>Dashboarding and KPI reporting for leadership visibility</li>
              </ul>
            </section>
          </div>

          <article className="about-panel surface-card reveal-on-scroll">
            <h2 className="skill-section-title">Experience</h2>
            <div className="timeline-entry">
              <h3 className="timeline-role">Graduate Trainee Engineer – Data Analytics & Operations</h3>
              <p className="timeline-meta">Manoj Cargo Carriers | Jul 2025 - Jan 2026 (6 Months)</p>
              <ul className="about-list">
                <li>
                  Built and optimized logistics datasets using SQL, Pandas, and Excel, improving data reliability and enabling faster reporting workflows.
                </li>
                <li>
                  Developed KPI frameworks (revenue, cost/kg, delays, utilization, vendor metrics), uncovering 89.35% revenue concentration and 37.5% outstanding exposure for strategic decision-making.
                </li>
                <li>
                  Analyzed 50+ transportation routes to identify high-profit (Bangalore-Daman) and loss-making (Bangalore-Chennai) lanes, enabling cost optimization opportunities.
                </li>
                <li>
                  Designed analytics-ready datasets powering Power BI and Tableau dashboards for revenue, bookings, profitability, and vendor risk tracking.
                </li>
                <li>
                  Performed data cleaning, validation, and reconciliation to ensure data accuracy and supported migration to a microservices-based architecture.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* ==== EDUCATION SECTION ==== */}
      <section className="reveal-on-scroll" style={{ marginTop: "2.5rem" }}>
        <div className="section-head">
          <h2 className="section-title">Education & Background</h2>
        </div>

        <div className="education-grid">
          <div className="education-card surface-card reveal-on-scroll">
            <div className="education-year">2021 – 2025</div>
            <h3>Bachelor of Engineering</h3>
            <p className="education-institution">MVJ College of Engineering, Bengaluru</p>
            <p className="education-detail">Electrical & Electronics Engineering</p>
            <p className="education-metric">CGPA: 8.05</p>
            <p style={{ marginTop: "0.6rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              Built strong analytical and problem-solving foundations through technical coursework and applied projects.
            </p>
          </div>

          <div className="education-card surface-card reveal-on-scroll">
            <div className="education-year">2019 – 2021</div>
            <h3>Pre-University (PCMB)</h3>
            <p className="education-institution">Mahila Samaja PU College, Kolar</p>
            <p className="education-metric">77%</p>
            <p style={{ marginTop: "0.6rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              Completed science stream with focus on Physics, Chemistry, Mathematics, and Biology.
            </p>
          </div>

          <div className="education-card surface-card reveal-on-scroll">
            <div className="education-year">2019</div>
            <h3>SSLC / 10th Standard</h3>
            <p className="education-institution">Sri Bhavani Vidya Samsthe High School, Kolar</p>
            <p className="education-metric">83.36%</p>
            <p style={{ marginTop: "0.6rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              Built strong academic fundamentals and quantitative problem-solving discipline.
            </p>
          </div>
        </div>
      </section>

      {/* ==== LANGUAGES & ADDITIONAL INFO ==== */}
      <section className="reveal-on-scroll" style={{ marginTop: "2.5rem" }}>
        <div className="section-head">
          <h2 className="section-title">Languages & Strengths</h2>
        </div>

        <div className="additional-info-cards">
          <div className="info-card surface-card reveal-on-scroll">
            <h3>🗣️ Languages</h3>
            <div className="info-content">
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <span style={{ padding: "0.5rem 0.85rem", background: "linear-gradient(135deg, #e9f0fb 0%, #f0f5ff 100%)", border: "1px solid #c8d9f0", borderRadius: "8px", fontSize: "0.9rem", fontWeight: "600", color: "var(--secondary)" }}>English</span>
                <span style={{ padding: "0.5rem 0.85rem", background: "linear-gradient(135deg, #e9f0fb 0%, #f0f5ff 100%)", border: "1px solid #c8d9f0", borderRadius: "8px", fontSize: "0.9rem", fontWeight: "600", color: "var(--secondary)" }}>Kannada</span>
              </div>
            </div>
          </div>

          <div className="info-card surface-card reveal-on-scroll">
            <h3>💪 Core Strengths</h3>
            <div className="info-content">
              <div className="strength-list">
                <span>Data Analysis</span>
                <span>Problem Solving</span>
                <span>Business Insights</span>
                <span>Data Visualization</span>
                <span>SQL Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
