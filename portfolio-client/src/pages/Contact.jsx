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

        <div className="contact-showcase surface-card reveal-on-scroll">
          <div>
            <p className="contact-showcase-kicker">Data Analyst Candidate</p>
            <h2 className="contact-showcase-title">Available for interviews and immediate joining opportunities</h2>
            <p className="contact-showcase-text">
              Happy to discuss full-time analyst roles, internship-to-hire opportunities, and project-based analytics work.
            </p>
            <div className="contact-pill-row">
              <span className="contact-pill">Bengaluru / Remote</span>
              <span className="contact-pill">Entry-level Data Analyst</span>
              <span className="contact-pill">SQL, Python, BI</span>
            </div>
          </div>

          <div className="contact-cta-group">
            <a href="mailto:Sanjaysanju143216@gmail.com" className="btn btn-primary contact-cta-btn">
              Send Email
            </a>
            <a
              href="https://drive.google.com/file/d/1ONt8jZE1-7a5akANDpAi0IYNlWHZ_rxb/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-cta-btn"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="contact-layout contact-layout-modern">
          <aside className="contact-info surface-card reveal-on-scroll">
            <h3>Direct Channels</h3>
            <p>Choose any channel below for a quick response.</p>

            <div className="contact-methods">
              <a href="mailto:Sanjaysanju143216@gmail.com" className="contact-link is-clickable">
                <span>Email</span>
                <span>Sanjaysanju143216@gmail.com</span>
              </a>
              <a href="tel:+917353929664" className="contact-link is-clickable">
                <span>Mobile</span>
                <span>+91 7353929664</span>
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
            </div>
          </aside>

          <div className="contact-form surface-card reveal-on-scroll">
            <h3>Professional Links</h3>
            <p className="contact-form-note">Portfolio links and profile resources for recruiter review.</p>

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
              <div className="contact-link is-static" aria-label="Availability">
                <span>Availability</span>
                <span>Immediate Joiner</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
