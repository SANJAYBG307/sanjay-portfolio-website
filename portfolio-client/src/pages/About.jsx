function About() {
  return (
    <div className="page-content">
      <section>
        <div className="section-head">
          <span className="section-kicker">About</span>
          <h1 className="section-title">Data Analyst focused on business impact</h1>
          <p className="section-subtitle">
            I turn operational data into clear insights, repeatable reporting systems, and practical actions.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-panel surface-card">
            <h2 className="skill-section-title">My Story</h2>
            <p>
              I am a Data Analyst with hands-on experience transforming complex operational datasets into strategic
              insights. My expertise lies in building scalable analytics solutions that drive business decisions and
              optimize performance.
            </p>

            <p>
              With a strong foundation in SQL, Python, and leading BI tools, I design data warehouses, build ETL
              processes, and create interactive dashboards that help teams move quickly and confidently.
            </p>

            <p>
              I care deeply about data quality, clarity in communication, and building analytics products that are
              useful in daily operations.
            </p>
          </article>

          <article className="about-panel surface-card">
            <h2 className="skill-section-title">Experience</h2>
            <div className="timeline-entry">
              <h3 className="timeline-role">Graduate Trainee Engineer - Data and Operations Analytics</h3>
              <p className="timeline-meta">Manoj Cargo Carriers | Jul 2025 - Jan 2026</p>
              <ul className="about-list">
                <li>Designed and implemented star schema data warehouses for logistics operations.</li>
                <li>Developed ETL workflows processing high-volume shipment records.</li>
                <li>Created interactive Tableau dashboards for executive decision-making.</li>
                <li>Analyzed operational metrics and improved route efficiency by 15%.</li>
              </ul>
            </div>
          </article>
        </div>

        <section className="surface-card about-panel" style={{ marginTop: "1rem" }}>
          <h2 className="skill-section-title">What Drives Me</h2>
          <ul className="about-list">
            <li>Solving operational and strategic problems through data.</li>
            <li>Building analytics workflows that teams can trust and reuse.</li>
            <li>Continuous learning in modern BI and data engineering practices.</li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default About;
