function Contact() {
  return (
    <div className="page-content">
      <section>
        <div className="section-head reveal-on-scroll">
          <span className="section-kicker">Contact</span>
          <h1 className="section-title">Let's connect</h1>
          <p className="section-subtitle">
            Open to Data Analyst opportunities in Analytics, BI, and Operations Analytics.
          </p>
        </div>

        <div className="contact-layout">
          <aside className="contact-info surface-card reveal-on-scroll">
            <h3>Reach Out</h3>
            <p>
              Open to Data Analyst opportunities and analytics collaborations.
            </p>
            <div className="contact-methods">
              <a href="mailto:Sanjaysanju143216@gmail.com" className="contact-link is-clickable">
                <span>Email</span>
                <span>Sanjaysanju143216@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sanjay-b-g-960181340"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link is-clickable"
              >
                <span>LinkedIn</span>
                <span>sanjay-b-g-960181340</span>
              </a>
              <a href="tel:+917353929664" className="contact-link is-clickable">
                <span>Mobile</span>
                <span>+91 7353929664</span>
              </a>
            </div>
          </aside>

          <div className="contact-form surface-card reveal-on-scroll">
            <h3 style={{ marginBottom: "0.75rem" }}>Availability</h3>
            <p style={{ marginBottom: "1.25rem", color: "var(--text-secondary)" }}>
              Immediate joiner for entry-level Data Analyst roles.
            </p>

            <div className="contact-methods">
              <a href="https://github.com/SANJAYBG307" target="_blank" rel="noopener noreferrer" className="contact-link is-clickable">
                <span>GitHub</span>
                <span>SANJAYBG307</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1ONt8jZE1-7a5akANDpAi0IYNlWHZ_rxb/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link is-clickable"
              >
                <span>Resume</span>
                <span>View Profile Resume</span>
              </a>
              <div className="contact-link is-static" aria-label="Preferred work setup">
                <span>Preferred Location</span>
                <span>Bengaluru / Remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
