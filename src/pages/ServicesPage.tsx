import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'From simple business websites to complex e-commerce platforms, we build solutions that work within your budget and grow with your business.',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      icon: '🌐',
      features: ['Responsive design for all devices', 'SEO optimization included', 'E-commerce integration', 'Content management systems', 'Performance optimization'],
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that connect you with your customers on the devices they use every day.',
      gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
      icon: '📱',
      features: ['iOS and Android development', 'Flutter cross-platform apps', 'Offline functionality', 'Push notifications', 'App store deployment'],
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology advice to help you make informed decisions about your digital infrastructure and operations.',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
      icon: '💻',
      features: ['Technology assessment', 'Digital transformation planning', 'Cloud migration strategy', 'Security auditing', 'Vendor evaluation'],
    },
    {
      title: 'IT Training',
      description: 'Skills development programs designed for youth and aspiring entrepreneurs to build careers in technology.',
      gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      icon: '🎓',
      features: ['Web development bootcamps', 'Mobile app development', 'Digital literacy programs', 'Business technology skills', 'Mentorship and job placement'],
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Our <span className="highlight">Services</span></h1>
          <p className="hero-subtitle">Comprehensive technology solutions designed for small businesses and communities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detail">
            {services.map((service, index) => (
              <div className="service-detail-item" key={service.title}>
                <div className="service-visual" style={{ background: service.gradient }}>
                  {service.icon}
                </div>
                <div className="service-detail-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-list">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Not sure which service you need?</h2>
          <p>Get in touch for a free consultation. We'll help you identify the right solution for your business.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
