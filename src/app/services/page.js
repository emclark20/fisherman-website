export default function Services() {
    return (
      <section className="section container">
        <h1 className="section-title">Our Services</h1>
        <div className="services-content">
          <div className="service-card">
            <h2>Tarpon Charters</h2>
            <p>
             Tarpon Charters are perfect for those who want to catch the fish of a lifetime. This is a seasonal trip only, offered May through June.
            </p>
            <ul>
              <li>6 Hour Trip starts at $950</li>
              <li>8 Hour Trip starts at $1,300</li>
            </ul>
            <p className="service-contact">
              Initial Prices are for 1-2 people. Additional people are $100 each. Charters can have a max of 6 people.
            </p>
          </div>
          
          <div className="service-card">
            <h2>Inshore Charters</h2>
            <p>
              Inshore charters are perfect for families and beginners. They are within The Bay and The Flats.
            </p>
            <ul>
            <li>4 Hour Trip starts at $550</li>
            <li>6 Hour Trip starts at $750</li>
            <li>8 Hour Trip starts at $950</li>
            </ul>
            <p className="service-contact">
              Initial Prices are for 1-2 people. Additional people are $50 each. Charters can have a max of 6 people.
            </p>
          </div>
          
          <div className="service-card">
            <h2>Near Shore Charters</h2>
            <p>
              Near Shore Charters are perfect for those looking to fish in deeper waters. Catching fish such as Permit, Goliath Groupers, Gag Grouper, and even Sharks!
            </p>
            <ul>
            <li>4 Hour Trip starts at $750</li>
            <li>6 Hour Trip starts at $950</li>
            <li>8 Hour Trip starts at $1200</li>
            </ul>
            <p className="service-contact">
              Initial Prices are for 1-2 people. Additional people are $50 each. Charters can have a max of 6 people.
            </p>
          </div>
        </div>
      </section>
    );
  }