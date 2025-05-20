import '../styles/ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-card">
        <h2>Book Your Fishing Experience</h2>
        <div className="contact-detail">
          <i className="icon-phone"></i>
          <p className="phone">Call Us: <strong>(941) 447-1524</strong></p>
        </div>
        <div className="contact-detail">
          <i className="icon-mail"></i>
          <p>Email: EngelLucas010@gmail.com</p>
        </div>
        
        <div className="contact-hours">
          <h3>Operating Hours</h3>
          <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
          <p>Sunday: 8:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}