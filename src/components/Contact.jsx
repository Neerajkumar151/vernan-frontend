import React, { useState, useEffect } from "react";
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
  const [toast, setToast] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setToast("Please fill all required fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setToast("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setToast("");

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setToast("Form Submitted!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else setToast("Something went wrong. Please try again.");
    } catch (err) {
      setToast("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section id="contact-us" className="contact" style={{ backgroundImage: `url(${bg})` }}>
      
      {toast && (
        <div className={`toast ${toast.includes("Submitted") ? "toast-success" : "toast-error"}`}>
          {toast}
        </div>
      )}

      <div className="contact-scale-wrapper">
        <div className="contact-form-section">
          <h2 className="contact-heading">Join the Story</h2>
          <p className="contact-subtext">Ready to bring your vision to life? Let’s talk.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name*" value={formData.name} onChange={handleChange} className="contact-input" />
            <input name="email" placeholder="Your email*" value={formData.email} onChange={handleChange} className="contact-input" />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="contact-input" />
            <textarea name="message" placeholder="Your message*" value={formData.message} onChange={handleChange} className="contact-textarea" />
            <button type="submit" className="contact-submit" disabled={loading}>
              <img src={submitButton} alt="Submit" />
            </button>
          </form>

          <div className="contact-footer">
            <p className="contact-email">vernita@vamanfilms.co.in  |  </p>
            <p className="contact-phone">+91 98736 84567</p>
          </div>
        </div>

        <div className="contact-left-text">
          Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br />
          Let’s catch up over coffee.<br />
          Great stories always begin with a good conversation.
        </div>

        <img src={leftPattern} alt="Left Decoration" className="contact-left-pattern" />
        <img src={rightPattern} alt="Right Decoration" className="contact-right-pattern" />
      </div>
    </section>
  );
}
