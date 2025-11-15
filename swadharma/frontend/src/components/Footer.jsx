import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Logo & About */}
        <div>
          <div className="footer-logo">Swadharma<span>Creations</span></div>
          <p className="footer-about">
            A creative studio that helps brands grow through compelling storytelling and strong visuals.
            We blend creativity, culture, and strategy to deliver impactful results.
          </p>
        </div>
        
        {/* Column 2: Navigation Links */}
        <div className="footer-links">
          <h3>Navigate</h3>
          <Link to="/" className="footer-link">Our DNA</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/workpage" className="footer-link">Our Work</Link>
          <Link to="/aboutus" className="footer-link">About us</Link>
          <Link to="/contactus" className="footer-link">Contact</Link>
        </div>

        {/* Column 3: Contact Links */}
        <div className="footer-links">
          <h3>Connect</h3>
          <a href="https://instagram.com/swadharmacreations" className="footer-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://linkedin.com/company/swadharmacreations" className="footer-link">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a href="mailto:hello@swadharmacreations.com" className="footer-link">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="tel:+1234567890" className="footer-link">
            <i className="fas fa-phone-alt"></i> Phone
          </a>
        </div>
      </div>
      <div className="copyright">© 2023 Swadharma Creations. All rights reserved.</div>
    </footer>
  )
}