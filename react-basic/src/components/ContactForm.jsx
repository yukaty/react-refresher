import { useState } from 'react';

export function ContactForm() {
  // states for form input values
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent reloading the page

    // validate form input
    if (!name.trim()) {
      alert('Input your name.');
      return;
    }
    if (!message.trim()) {
      alert('Input your message.');
      return;
    }

    // display the form data in a popup
    alert(`Thank you for your inquiry.\n\nName:\n${name}\n\nMessage:\n${message}`);

    // reset the form
    setName('');
    setMessage('');
  };

  // form component
  return (
    <section>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message"
            rows="4"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

