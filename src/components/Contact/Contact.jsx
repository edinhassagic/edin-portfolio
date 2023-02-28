import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    if (fullName && email) {
      setIsAlertVisible(true);
    }
   
  };

  setTimeout(() => {
    setIsAlertVisible(false);
  }, 10000);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9qx9gar",
      "template_vdjk305port",
      form.current,
      "A0T-CJSlwHtCoXPZ0"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>edinhassagic@gmail.com</h5>
            <a
              href="mailto:edinhassagic@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me a mail!
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Edin Hasagic</h5>
            <a href="https://m.me/Edin4You" target="_blank" rel="noreferrer">
              Send me a message!
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h4>Whatsapp</h4>
            <h5>+387613*****</h5>
            <a
              href="https://api.whatsapp.com/send?phone=38761338354"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message /call me!
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Fullname" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input type="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleButtonClick}
          >
            Send Message
          </button>
          {isAlertVisible && (
            <p style={{ color: "#4db6ff" }}>Email sent succesfully</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
