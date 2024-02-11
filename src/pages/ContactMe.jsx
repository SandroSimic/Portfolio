import React, { useRef, useState } from "react";
import profilePic2 from "../images/profilePic2.jpg";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMe = ({ setCursorVariant }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const form = useRef();

  const enter = () => setCursorVariant("hover");
  const leave = () => setCursorVariant("default");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return toast.error("Please fill out the entire form");
    }

    emailjs
      .sendForm(
        "service_pi48cfo",
        "template_zjpvs0y",
        form.current,
        "DIOsQt_adNbf2WXAI"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email is Sent!");
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contactMe" id="contact">
      <div className="contactMe__text">
        <div className="contactMe__text__heading">
          <h1>
            Get in <span>touch</span>
            <br /> with me today
          </h1>
          <p>
            If you have any questions or request about me and my services.
            <br />
            Contact me and let's schedule a call!
          </p>
        </div>
        <div className="contactMe__contact">
          <div className="contactMe__contact__image">
            <img src={profilePic2} alt="Picture of me" />
          </div>
          <div className="contactMe__contact__email">
            <h2>Sandro Simic</h2>
            <p>sandrosimic10@gmail.com</p>
          </div>
        </div>
      </div>
      <form className="contactMe__form" ref={form} onSubmit={sendEmail}>
        <div className="contactMe__input">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contactMe__input">
          <label>Email</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contactMe__input">
          <label>Message</label>
          <textarea
            type="text"
            placeholder="Type your message here..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="contactMe__btn"
          onMouseEnter={enter}
          onMouseLeave={leave}
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
