import React, { useState } from "react";

const FORM_ENDPOINT = "https://ejyvytm3z8.execute-api.us-west-2.amazonaws.com/email123/simpleemail"; // TODO - fill on the later step

const ContactForm = () => {
    const [status, setStatus] = useState();
    const handleSubmit = (e) => {
      e.preventDefault();

      
      const inputs = e.target.elements;
      const data = {};
  
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
          data[inputs[i].name] = inputs[i].value;
        }
      }
  
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => setStatus("I'll get back to you soon."))
        .catch((err) => setStatus(err.toString()));
    };
  
    if (status) {
      return (
        <div className="contact-msg-container flex">
          <div className="contact-msg">Thank you!</div>
          <div className="contact-msg">{status}</div>
        </div>
      );
    }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input type="text" placeholder="Name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Message" name="description" required />
      </div>
      <div>
        <button className="btn" type="submit"> Send </button>
      </div>
    </form>
  );
};

export default ContactForm;