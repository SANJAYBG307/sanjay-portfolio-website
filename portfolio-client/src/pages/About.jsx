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
                I am a Data Analyst focused on solving real business problems using data. During my experience at Manoj Cargo Carriers, I worked on shipment booking, dispatch, and vendor payment datasets to identify route-level revenue patterns and operational gaps.
              </p>

              <p>
                My core strength is end-to-end analytics: from data cleaning and transformation to dashboard development and insight communication. I have worked with SQL (MySQL), Python (Pandas), Excel, Power BI, and Tableau to build analytics workflows that help teams make better decisions.
              </p>

              <p>
                I also collaborated with engineering teams during a Django monolith-to-microservices migration, supporting dataset validation and data consistency across services. This gave me strong cross-functional exposure to both analytics and product environments.
              </p>
            </article>

            <section className="surface-card about-panel reveal-on-scroll">
              <h2 className="skill-section-title">What I Bring</h2>
              <ul className="about-list">
                <li>Strong SQL-driven analysis for operational and business data.</li>
                <li>Clean, reliable datasets through ETL and validation.</li>
                <li>Dashboarding and KPI reporting for leadership visibility.</li>
                <li>Insight storytelling that connects data to action.</li>
              </ul>
            </section>
          </div>

          <article className="about-panel surface-card reveal-on-scroll">
            <h2 className="skill-section-title">Experience</h2>
            <div className="timeline-entry">
              <h3 className="timeline-role">Graduate Trainee Engineer — Data & Operations Analytics</h3>
              <p className="timeline-meta">Manoj Cargo Carriers | Jul 2025 - Jan 2026 (6 Months)</p>
              <ul className="about-list">
                <li>
                  Analyzed logistics operational datasets including shipment bookings, dispatch records, and vendor payments using SQL.
                </li>
                <li>
                  Identified route-level revenue trends and shipment volume patterns, helping stakeholders evaluate operational performance.
                </li>
                <li>
                  Used Python (Pandas) to clean and transform shipment datasets for analysis of delivery performance and route profitability.
                </li>
                <li>
                  Built interactive Power BI and Tableau dashboards visualizing booking volumes, revenue trends, and customer contributions.
                </li>
                <li>
                  Supported engineering teams during migration from Django monolithic architecture to microservices, validating datasets to ensure data integrity.
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
