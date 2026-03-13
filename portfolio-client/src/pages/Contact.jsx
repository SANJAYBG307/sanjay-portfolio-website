import { useState } from "react";
import { sendContactMessage } from "../services/api";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");

  async function handleSubmit(e) {

    e.preventDefault();

    const result = await sendContactMessage({
      name,
      email,
      message
    });

    setStatus(result.message);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (

    <div style={{ padding: "40px", maxWidth: "500px" }}>

      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit">Send Message</button>

      </form>

      <p>{status}</p>

    </div>
  );
}

export default Contact;