import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>You can configure this form to use Formspree or another static form provider.</p>

      <form action="https://formspree.io/f/your-form-id" method="POST">
        <label>
          Your name
          <input type="text" name="name" required />
        </label>
        <label>
          Your email
          <input type="email" name="_replyto" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="6" required />
        </label>
        <button type="submit" className="btn">Send</button>
      </form>

      <p style={{marginTop: '1rem'}}>Replace the action URL with your Formspree form endpoint (or remove the form if you don't want one).</p>
    </div>
  );
}
