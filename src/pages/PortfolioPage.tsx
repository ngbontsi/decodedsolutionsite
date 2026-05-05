export default function PortfolioPage() {
  const projects = [
    {
      title: 'Local Business E-Commerce Platform',
      description: 'Built a complete online store with payment integration, inventory management, and mobile responsiveness.',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      icon: '🌐',
      tags: ['Web Dev', 'E-Commerce'],
    },
    {
      title: 'Community Service App',
      description: 'Developed a cross-platform app connecting local service providers with community members.',
      gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
      icon: '📱',
      tags: ['Mobile', 'Community'],
    },
    {
      title: 'Digital Transformation Project',
      description: 'Helped a traditional business transition to digital operations, including cloud migration and training.',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
      icon: '💻',
      tags: ['Consulting', 'Training'],
    },
    {
      title: 'Decoded Platform Dashboard',
      description: 'Internal admin dashboard for managing users, monitoring services, and tracking business analytics across the Decoded platform.',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      icon: '📊',
      tags: ['React', 'Spring Boot', 'Microservices'],
      liveUrl: 'https://ngbontsi.github.io/decodedsolutions/',
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
            <p><strong>More projects coming soon.</strong> Our portfolio is growing as we continue to serve our community.</p>
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
