import '../styles/HeroSection.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
      <div className="wrapper">
        <h1>Experience the Fishing Trip of A Lifetime</h1>
        <p>Professional fishing services with a decade of experience on the water</p>
        </div>
        <div className="hero-cta">
          <Link href="/contact" className="btn">Book Now: (941) 447-1524</Link>
        </div>
      </div>
    </section>
  );
}
