 
export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="section-label">Get In Touch</p>
        <h1>Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Visit Us</h2>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>1013 Howard Street<br />Omaha, NE 68102</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <h3>Hours</h3>
              <p>Mon–Fri: 11am – 8pm<br />Sat: 10am – 8pm<br />Sun: 12pm – 6pm</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>(402) 555-0100</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>hello@howardstreetwine.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="How can we help?"></textarea>
          </div>
          <button className="btn-primary">Send Message</button>
        </div>
      </section>
    </div>
  )
}
