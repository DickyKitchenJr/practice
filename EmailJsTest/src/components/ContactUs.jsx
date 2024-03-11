import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //.sendForm("service id", "template id", form.current, {publicKey: "public key"})
    emailjs
      .sendForm("contact_service", "template_18nwxbn", form.current, {
        publicKey: "iX7305v5_CCdTLK2r",
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
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
