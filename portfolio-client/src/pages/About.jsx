function About() {
  return (
    <div className="page-content">
      <section>
        <div className="section-head reveal-on-scroll">
          <span className="section-kicker">About</span>
          <h1 className="section-title">Data Analyst focused on solving business problems</h1>
          <p className="section-subtitle">
            I work with operational datasets to identify trends, build reliable dashboards, and deliver insights that drive measurable action.
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
                <li>Strong SQL-driven analysis for operational and business data</li>
                <li>Clean, reliable datasets through ETL and validation</li>
                <li>Dashboarding and KPI reporting for leadership visibility</li>
                <li>Insight storytelling that connects data to action</li>
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
                  Analyzed 10,000+ shipment, dispatch, and vendor payment records using SQL (MySQL) to identify route-level revenue trends and performance gaps.
                </li>
                <li>
                  Cleaned and transformed multi-source operational datasets using Pandas and Excel, improving data reliability for delivery and profitability analysis.
                </li>
                <li>
                  Developed interactive Power BI and Tableau dashboards tracking booking volume, revenue trends, and customer contribution, reducing manual reporting effort.
                </li>
                <li>
                  Performed exploratory data analysis across 50+ transportation routes to identify high- and low-performing lanes, supporting operational planning decisions.
                </li>
                <li>
                  Supported data validation during migration from a Django monolith to microservices, ensuring data consistency across multiple services.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
