 
export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Omaha's Neighborhood Wine Shop</p>
          <h1>Discover Wines<br /><em>Worth Savoring</em></h1>
          <p className="hero-desc">
            Curated selections from small producers around the world — 
            paired with the knowledge to help you love every bottle.
          </p>
          <div className="hero-buttons">
            <a href="/shop" className="btn-primary">Shop New Arrivals</a>
            <a href="/events" className="btn-outline">View Events</a>
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="featured">
        <p className="section-label">Why Howard Street</p>
        <h2>A Different Kind of Wine Shop</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🍷</span>
            <h3>Curated Selection</h3>
            <p>Every bottle is hand picked by our team from small, passionate producers.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎓</span>
            <h3>Expert Guidance</h3>
            <p>Our staff loves wine and loves sharing that knowledge with you.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🗓️</span>
            <h3>Weekly Events</h3>
            <p>Tastings, classes, and wine club gatherings every week.</p>
          </div>
        </div>
      </section>
    </div>
  )
}