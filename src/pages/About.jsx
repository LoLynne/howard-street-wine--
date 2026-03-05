 
export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <p className="section-label">Our Story</p>
        <h1>About Howard Street<br /><em>Wine Merchant</em></h1>
        <p className="about-subtitle">A neighborhood wine shop rooted in community</p>
      </section>

      {/* STORY SECTION */}
      <section className="about-story">
        <div className="story-text">
          <p className="section-label">Who We Are</p>
          <h2>More Than Just a Wine Shop</h2>
          <p>Howard Street Wine Merchant was born out of a love for great wine and great people. Located in the heart of Omaha, we believe that wine is best enjoyed with good company and good conversation.</p>
          <p>Our team travels the world seeking out small producers, family estates, and hidden gems — bringing them back to share with our Omaha community.</p>
          <p>Whether you're a seasoned collector or just starting your wine journey, we're here to guide you every step of the way.</p>
        </div>
        <div className="story-image">
          <div className="image-placeholder">
            <span>🍷</span>
            <p>Est. in Omaha, NE</p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team">
        <p className="section-label">The People</p>
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">🧑‍🍳</div>
            <h3>James Howard</h3>
            <p className="team-role">Founder & Head Sommelier</p>
            <p>20 years of experience curating exceptional wines from around the world.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>Maria Santos</h3>
            <p className="team-role">Wine Educator</p>
            <p>Passionate about making wine approachable and fun for everyone.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🧑‍💼</div>
            <h3>Tom Clarke</h3>
            <p className="team-role">Events Coordinator</p>
            <p>Crafting memorable tasting experiences and wine club gatherings.</p>
          </div>
        </div>
      </section>
    </div>
  )
}