import React, { useState } from "react";
import bg from "../assets/bg.png";
import leftPattern from "../assets/contact-left-pattern.png";
import rightPattern from "../assets/contact-right-pattern.png";
import submitButton from "../assets/contact-submit.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("✅ Submitted:", data);
        setStatus("Form Submitted!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="contact" style={{ backgroundImage: `url(${bg})` }}>
      <div className="contact-scale-wrapper">
        {/* --- RIGHT FORM SECTION --- */}
        <div className="contact-form-section">
          <h2 className="contact-heading">Join the Story</h2>
          <p className="contact-subtext">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
            ></textarea>

            <button type="submit" className="contact-submit" disabled={loading}>
              <img src={submitButton} alt="Submit" />
            </button>

           <div
  style={{
    height: "24px", // ✅ reserve fixed height for message text
    marginTop: "10px",
    textAlign: "center",
  }}
>
  {status && (
    <span
      style={{
        color: status.includes("Submitted") ? "green" : "red",
        fontFamily: "Instrument Sans",
        fontSize: "16px",
        transition: "opacity 0.3s ease",
      }}
    >
      {status}
    </span>
  )}
</div>

          </form>

          <div className="contact-footer">
            <p className="contact-email">vernita@vamanfilms.co.in  |  </p>
            <p className="contact-phone"> +91 98736 84567</p>
          </div>
        </div>

        {/* --- LEFT PARAGRAPH --- */}
        <div className="contact-left-text">
          Whether you have an idea, a question, or simply want to explore how V can work together,
          V’re just a message away.<br />
          Let’s catch up over coffee.<br />
          Great stories always begin with a good conversation.
        </div>

        {/* --- BACKGROUND ILLUSTRATIONS --- */}
        <img src={leftPattern} alt="Left Decoration" className="contact-left-pattern" />
        <img src={rightPattern} alt="Right Decoration" className="contact-right-pattern" />
      </div>
    </section>
  );
}
