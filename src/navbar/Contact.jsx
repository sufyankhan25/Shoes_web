import { useState } from "react";
import "../Contact.css"; // Import CSS for styling

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We have received your message.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h3 className="contact-heading">Contact Us</h3>
      <p className="contact-para">Have any questions? We'd love to hear from you!</p>
      <form onSubmit={handleMessage} className="contact-form">
        <input 
          type="text"  
          placeholder="Enter your name"  
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email"  
          placeholder="Enter your Email"  
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Enter Your Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit" className="contact-btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
