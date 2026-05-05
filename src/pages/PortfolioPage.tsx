export default function PortfolioPage() {
  const projects = [
    {
      title: 'Fresh Cuts Butchery',
      description: 'A full e-commerce platform for a local butchery. Product catalog with category filtering, shopping cart, wishlist, and 2-step checkout with delivery or pickup options.',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      icon: '🥩',
      tags: ['React', 'Vite', 'E-Commerce'],
      liveUrl: 'https://ngbontsi.github.io/decodedsolutions/butcher-shop/',
    },
    {
      title: 'Guesthouse Booking System',
      description: 'A complete guesthouse booking platform. Property browsing, room selection, date picker with guest count, live booking summary, and reservation confirmation.',
      gradient: 'linear-gradient(135deg, #26de81 0%, #20bf6b 100%)',
      icon: '🏡',
      tags: ['React', 'Vite', 'Booking'],
      liveUrl: 'https://ngbontsi.github.io/decodedsolutions/guesthouse-client/',
    },
    {
      title: 'Admin Dashboard',
      description: 'Internal admin dashboard for managing users, monitoring services, tracking business analytics across the Decoded platform.',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      icon: '📊',
      tags: ['React', 'Dashboard', 'Analytics'],
      liveUrl: 'https://ngbontsi.github.io/decodedsolutions/dashboard/',
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Our <span className="highlight">Portfolio</span></h1>
          <p className="hero-subtitle">Real projects delivering real results for small businesses and communities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div className="portfolio-card" key={project.title}>
                <div style={{ height: '200px', background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem' }}>
                  {project.icon} {project.title.split(' ')[0]}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3>{project.title}</h3>
                  <p style={{ margin: '0.5rem 0', color: 'var(--gray)' }}>{project.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem' }}>
                      View Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--gray)' }}>
            <p><strong>These are live working demos.</strong> Click "View Live Demo" to interact with each project.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Want to Be Our Next Success Story?</h2>
          <p>Let's discuss how we can help your business grow with the right technology.</p>
          <a href="/contact" className="btn btn-primary">Start a Project</a>
        </div>
      </section>
    </>
  );
}
