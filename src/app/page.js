import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="section container">
        <h2 className="section-title">Welcome to Drifting and Dreaming Charters</h2>
        <div className="home-content">
          <p>
            Drifting and Dreaming Charters is a premier charter fishing service with 10 years of experience on the water. 
            We specialize in giving valuable fishing trips to people of all different experience levels.
          </p>
          <p>
          Whether you're interested in tarpin trips, or want to book a charter experience,
          we're here to provide you with an authentic and unforgettable maritime adventure.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <h3>Boat Specs</h3>
              <p>Drifting and Dreaming is powered by a 24 T-Craft boat. There is a cooler on board for drinks and food, and all the lifejackets you could need!</p>
            </div>
            <div className="highlight-item">
              <h3>Top-Notch Equipment</h3>
              <p>We use only the best fishing equipment and maintain our vessels to the highest standards.</p>
            </div>
            <div className="highlight-item">
              <h3>Sustainable Practices</h3>
              <p>We're committed to responsible fishing methods that protect our oceans for future generations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
