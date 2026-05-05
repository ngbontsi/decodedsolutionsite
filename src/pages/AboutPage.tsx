export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">About <span className="highlight">Decoded Solutions</span></h1>
          <p className="hero-subtitle">Learn more about our mission, values, and the team behind our community-focused technology solutions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>Decoded Solutions was founded with a clear vision: to bridge the digital divide in underserved communities while creating meaningful employment opportunities for young people.</p>
            <p>With over 13 years of senior-level experience in software engineering, we recognized that small businesses in our community couldn't access the same quality of technology solutions available to larger enterprises. We set out to change that.</p>
            <p>Every project we take on is designed to not only deliver excellent results for our clients but also to provide hands-on training and employment for local youth. This dual-impact approach is at the heart of everything we do.</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div style={{ fontSize: '2rem' }}>🤝</div>
              <h4>Community First</h4>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Every decision we make considers the impact on our community.</p>
            </div>
            <div className="value-card">
              <div style={{ fontSize: '2rem' }}>📚</div>
              <h4>Knowledge Sharing</h4>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>We believe in empowering clients with the skills to grow independently.</p>
            </div>
            <div className="value-card">
              <div style={{ fontSize: '2rem' }}>💡</div>
              <h4>Innovation</h4>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>We use modern tools and approaches to deliver the best possible solutions.</p>
            </div>
            <div className="value-card">
              <div style={{ fontSize: '2rem' }}>🎯</div>
              <h4>Affordability</h4>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Quality technology solutions should be accessible to everyone.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
