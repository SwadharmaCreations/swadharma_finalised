import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div className="footer-logo">Swadharma<span>Creations</span></div>
          <p className="footer-about">
            A creative studio that helps brands grow through compelling storytelling and strong visuals.
            We blend creativity, culture, and strategy to deliver impactful results.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/" className="footer-link">Our DNA</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/workpage" className="footer-link">Our Work</Link>
          <Link to="/aboutus" className="footer-link">About us</Link>
          <Link to="/contactus" className="footer-link">Contact</Link>
        </div>
        <div className="footer-links">
          <a href="https://instagram.com/swadharmacreations" className="footer-link">Instagram</a>
          <a href="https://linkedin.com/company/swadharmacreations" className="footer-link">LinkedIn</a>
          <a href="mailto:hello@swadharmacreations.com" className="footer-link">Email</a>
          <a href="tel:+1234567890" className="footer-link">Phone</a>
        </div>
      </div>
      <div className="copyright">© 2023 Swadharma Creations. All rights reserved.</div>
    </footer>
  )
}
