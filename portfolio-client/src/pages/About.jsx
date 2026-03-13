function About() {
  return (
    <div className="page-content">
      <section>
        <div className="section-head reveal-on-scroll">
          <span className="section-kicker">About</span>
          <h1 className="section-title">Data Analyst focused on business impact</h1>
          <p className="section-subtitle">
            I turn operational data into clear insights, repeatable reporting systems, and practical actions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left-stack">
            <article className="about-panel surface-card reveal-on-scroll">
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

            <section className="surface-card about-panel reveal-on-scroll">
              <h2 className="skill-section-title">What Drives Me</h2>
              <ul className="about-list">
                <li>Solving operational and strategic problems through data.</li>
                <li>Building analytics workflows that teams can trust and reuse.</li>
                <li>Continuous learning in modern BI and data engineering practices.</li>
              </ul>
            </section>
          </div>

          <article className="about-panel surface-card reveal-on-scroll">
            <h2 className="skill-section-title">Experience</h2>
            <div className="timeline-entry">
              <h3 className="timeline-role">Graduate Trainee Engineer Intern</h3>
              <p className="timeline-meta">Manoj Cargo Carriers | Jul 2025 - Jan 2026 (6 Months)</p>
              <ul className="about-list">
                <li>
                  Analyzed logistics operational datasets including shipment bookings, dispatch records, and vendor
                  payments using SQL.
                </li>
                <li>
                  Identified route-level revenue trends and shipment volume patterns, helping stakeholders evaluate
                  operational performance.
                </li>
                <li>
                  Used Python (Pandas) to clean and transform shipment datasets for analysis of delivery performance
                  and route profitability.
                </li>
                <li>
                  Built interactive Power BI and Tableau dashboards visualizing booking volumes, revenue trends, and
                  customer contributions.
                </li>
                <li>
                  Supported engineering teams during migration from Django monolithic architecture to microservices,
                  validating datasets to ensure data integrity.
                </li>
                <li>Used Git/GitHub in a Linux environment for version control and collaboration.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
