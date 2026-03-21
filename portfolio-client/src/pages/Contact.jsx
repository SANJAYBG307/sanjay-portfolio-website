import { useState } from "react";
import { sendContactMessage } from "../services/api";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendContactMessage({
        name,
        email,
        message
      });

      setStatus({
        type: result.success ? "success" : "error",
        message: result.message
      });

      if (result.success) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  }

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
              Share your requirement, role details, or collaboration idea. I will respond as soon as possible.
            </p>
            <div className="contact-methods">
              <a href="mailto:Sanjaysanju143216@gmail.com" className="contact-link">
                <span>Email</span>
                <span>Sanjaysanju143216@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sanjay-b-g-960181340"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>LinkedIn</span>
                <span>sanjay-b-g-960181340</span>
              </a>
              <a href="tel:+917353929664" className="contact-link">
                <span>Mobile</span>
                <span>+91 7353929664</span>
              </a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="contact-form surface-card reveal-on-scroll">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                placeholder="Tell me about the role or project"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary form-submit"
              style={{ opacity: isLoading ? 0.75 : 1, cursor: isLoading ? "not-allowed" : "pointer" }}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status && <div className={`form-status ${status.type}`}>{status.message}</div>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
