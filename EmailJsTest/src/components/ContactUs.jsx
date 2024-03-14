import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    let input = e.target.value;

    setName(input);
  };

  const handleEmailChange = (e) => {
    let input = e.target.value;

    setEmail(input);
  };

  const handleMessageChange = (e) => {
    let input = e.target.value;

    setMessage(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service id", "template id", form.current, {
        publicKey: "public key",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="user_name"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="user_email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        value={message}
        onChange={handleMessageChange}
      />
      <input type="submit" value="Send" />
    </form>
  );
};
