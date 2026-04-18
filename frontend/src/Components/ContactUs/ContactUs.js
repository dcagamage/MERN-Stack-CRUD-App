import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../Nav/Nav";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c0vy7pp", "template_qxz6g16", form.current, {
        publicKey: "s4DXHyp3HsjGZtKdF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message send successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message not send");
        },
      );
  };

  return (
    <div>
      <Nav />
      <h1>Contact Us</h1> <br />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label> <br />
        <input type="text" name="user_name" /> <br />
        <br />
        <label>Email</label> <br />
        <input type="email" name="user_email" /> <br />
        <br />
        <label>Message</label> <br />
        <textarea name="message" /> <br />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactUs;
