import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import WorkPage from './pages/WorkPage.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ScrollToTop from './ScrollToTop.jsx' 

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <ScrollToTop /> {/* 2. Add the component here */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/workpage" element={<WorkPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}