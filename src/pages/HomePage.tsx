import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Empowering Communities<br />Through <span className="highlight">Technology</span></h1>
          <p className="hero-subtitle">We provide affordable IT consulting, web development, and digital transformation to help small businesses thrive and create employment opportunities for youth.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Professional websites and e-commerce solutions tailored to your budget.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform applications for iOS and Android.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>IT Consulting</h3>
              <p>Strategic technology advice to optimize your business operations.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>IT Training</h3>
              <p>Skills development programs for youth and aspiring entrepreneurs.</p>
            </div>
          </div>
          <div className="services-cta" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Affordable Pricing</h3>
                <p style={{ color: 'var(--gray)' }}>Tailored solutions for small business budgets without compromising quality.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <h3>13+ Years Experience</h3>
                <p style={{ color: 'var(--gray)' }}>Senior-level technical expertise in Java, software architecture, and modern web technologies.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Community Focused</h3>
                <p style={{ color: 'var(--gray)' }}>We reinvest in communities by creating employment and upskilling youth.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Training Included</h3>
                <p style={{ color: 'var(--gray)' }}>Every project includes knowledge transfer so you can manage your digital tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Digitize Your Business?</h2>
          <p>Let's discuss how technology can grow your business and create opportunities in your community.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}
