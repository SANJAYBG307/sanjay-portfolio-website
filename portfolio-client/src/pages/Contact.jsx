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
        <div className="section-head">
          <span className="section-kicker">Contact</span>
          <h1 className="section-title">Let us work together</h1>
          <p className="section-subtitle">
            Open to analyst roles, data projects, and opportunities where business outcomes matter.
          </p>
        </div>

        <div className="contact-layout">
          <aside className="contact-info surface-card">
            <h3>Reach Out</h3>
            <p>
              Share your requirement, role details, or collaboration idea. I will respond as soon as possible.
            </p>
            <div className="contact-methods">
              <a href="mailto:contact@example.com" className="contact-link">
                <span>Email</span>
                <span>contact@example.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>LinkedIn</span>
                <span>Professional profile</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>GitHub</span>
                <span>Project repository</span>
              </a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="contact-form surface-card">
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
