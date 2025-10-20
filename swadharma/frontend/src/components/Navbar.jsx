import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const nb = document.getElementById('navbar')
      if (!nb) return
      if (window.scrollY > 50) nb.classList.add('scrolled')
      else nb.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <>
      <nav className="navbar" id="navbar">
        <Link to="/" className="nav-logo">Swadharma</Link>
        <div className="nav-links">
          <NavLink to="/" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Brand DNA</NavLink>
          <NavLink to="/aboutus" className={({isActive})=>`nav-link ${isActive?'active':''}`}>About us</NavLink>
          <NavLink to="/services" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Services</NavLink>
          <NavLink to="/workpage" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Our work</NavLink>
          <NavLink to="/contactus" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Contact</NavLink>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <NavLink onClick={()=>setMobileOpen(false)} to="/" className="nav-link">Brand DNA</NavLink>
        <NavLink onClick={()=>setMobileOpen(false)} to="/aboutus" className="nav-link">About us</NavLink>
        <NavLink onClick={()=>setMobileOpen(false)} to="/services" className="nav-link">Services</NavLink>
        <NavLink onClick={()=>setMobileOpen(false)} to="/workpage" className="nav-link">Our work</NavLink>
        <NavLink onClick={()=>setMobileOpen(false)} to="/contactus" className="nav-link">Contact</NavLink>
      </div>
      <div className={`menu-overlay ${mobileOpen ? 'active' : ''}`} onClick={()=>setMobileOpen(false)}></div>
      <div style={{height: 80}} /> {/* spacer for fixed navbar */}
    </>
  )
}
