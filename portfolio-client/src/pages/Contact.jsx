import { useState, useEffect } from "react";
import { sendContactMessage } from "../services/api";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Auto-hide success modal
  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  // Validation functions
  function validateForm() {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (message.trim().length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }

    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrors({});
    setStatus("");

    // Validate before submission
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendContactMessage({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim()
      });

      if (result.success) {
        setShowSuccessModal(true);
        setName("");
        setEmail("");
        setMessage("");
        setStatus("");
      } else {
        setStatus({
          type: "error",
          message: result.message
        });
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

  const messageLength = message.length;
  const messageLimit = 2000;

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
                placeholder="Your name"
                className={errors.name ? "input-error" : ""}
                maxLength="100"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className={errors.email ? "input-error" : ""}
                maxLength="100"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
                <span className="char-count">
                  {messageLength}/{messageLimit}
                </span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about the role or project"
                className={errors.message ? "input-error" : ""}
                maxLength={messageLimit}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary form-submit"
              style={{ 
                opacity: isLoading ? 0.65 : 1, 
                cursor: isLoading ? "not-allowed" : "pointer" 
              }}
            >
            {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status && <div className={`form-status ${status.type}`}>{status.message}</div>}
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-backdrop">
          <div className="success-modal">
            <div className="modal-icon">✓</div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for getting in touch. I'll respond soon.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
