import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Decoded Solutions</h3>
            <p>Empowering small businesses and youth through affordable technology solutions and skills development.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>📍 18 Pukwana Street, Lingelihle, Nxuba, 5881</p>
            <p>📞 064 6320739</p>
            <p>✉️ solutionsdecoded@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Decoded Solutions. Reg No: 2025/836537/07. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
