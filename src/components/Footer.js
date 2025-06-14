import '../styles/Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Drifting and Dreaming</h3>
            <p>Professional charter fishing services with years of experience.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Bradenton, FL 34209</p>
            <p>Phone: (941) 447-1524</p>
            <p>Email: EngelLucas010@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Drifting and Dreaming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}