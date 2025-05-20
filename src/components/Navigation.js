import '../styles/Navigation.css';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo">
          Drifting and Dreaming Charters
        </Link>
        <ul className="nav-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}